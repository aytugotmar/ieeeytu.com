//AOS

AOS.init({
  disable: function () {
    // Mobil cihazda isek devre dışı bırak
    return window.innerWidth < 768;
  },
});

// MOUSE ANİMASYON

class PointerParticle {
  constructor(spread, speed, component) {
    const { ctx, pointer, hue } = component;

    this.ctx = ctx;
    this.x = pointer.x;
    this.y = pointer.y;
    this.mx = pointer.mx * 0.1;
    this.my = pointer.my * 0.1;
    this.size = Math.random() + 1;
    this.decay = 0.05; // Parçacıklar daha hızlı kaybolacak
    this.speed = speed * 0.08;
    this.spread = spread * this.speed;
    this.spreadX = (Math.random() - 0.5) * this.spread - this.mx;
    this.spreadY = (Math.random() - 0.5) * this.spread - this.my;
    this.color = `hsl(${hue}deg 90% 60%)`;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }

  collapse() {
    this.size -= this.decay;
  }

  trail() {
    this.x += this.spreadX * this.size;
    this.y += this.spreadY * this.size;
  }

  update() {
    this.draw();
    this.trail();
    this.collapse();
  }
}

class PointerParticles extends HTMLElement {
  static register(tag = "pointer-particles") {
    if ("customElements" in window) {
      customElements.define(tag, this);
    }
  }

  static css = `
    :host {
      display: grid;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  `;

  constructor() {
    super();

    this.canvas;
    this.ctx;
    this.fps = 60;
    this.msPerFrame = 1000 / this.fps;
    this.timePrevious;
    this.particles = [];
    this.pointer = {
      x: 0,
      y: 0,
      mx: 0,
      my: 0,
    };
    this.hue = 0;
  }

  connectedCallback() {
    const canvas = document.createElement("canvas");
    const sheet = new CSSStyleSheet();

    this.shadowroot = this.attachShadow({ mode: "open" });

    sheet.replaceSync(PointerParticles.css);
    this.shadowroot.adoptedStyleSheets = [sheet];

    this.shadowroot.append(canvas);

    this.canvas = this.shadowroot.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setCanvasDimensions();
    this.setupEvents();
    this.timePrevious = performance.now();
    this.animateParticles();
  }

  createParticles(event, { count, speed, spread }) {
    this.setPointerValues(event);

    for (let i = 0; i < count; i++) {
      this.particles.push(new PointerParticle(spread, speed, this));
    }
  }

  setPointerValues(event) {
    this.pointer.x = event.clientX - this.offsetLeft;
    this.pointer.y = event.clientY - this.offsetTop;
    this.pointer.mx = event.movementX;
    this.pointer.my = event.movementY;
  }

  setupEvents() {
    const targetElements = document.querySelectorAll('[data-particles="true"]');

    targetElements.forEach((element) => {
      element.addEventListener("click", (event) => {
        this.createParticles(event, {
          count: 100, // Daha az parçacık
          speed: Math.random() + 1,
          spread: 17, // Daha az yayılma
        });
      });

      element.addEventListener("pointermove", (event) => {
        this.createParticles(event, {
          count: 7, // Daha az parçacık
          speed: this.getPointerVelocity(event),
          spread: 2,
        });
      });
    });

    window.addEventListener("resize", () => this.setCanvasDimensions());
  }

  getPointerVelocity(event) {
    const a = event.movementX;
    const b = event.movementY;
    const c = Math.floor(Math.sqrt(a * a + b * b));

    return c;
  }

  handleParticles() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();

      if (this.particles[i].size <= 0.1) {
        this.particles.splice(i, 1);
        i--;
      }
    }
  }

  setCanvasDimensions() {
    const rect = document.body.getBoundingClientRect();

    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  animateParticles() {
    requestAnimationFrame(() => this.animateParticles());

    const timeNow = performance.now();
    const timePassed = timeNow - this.timePrevious;

    if (timePassed < this.msPerFrame) return;

    const excessTime = timePassed % this.msPerFrame;

    this.timePrevious = timeNow - excessTime;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.hue = this.hue > 360 ? 0 : (this.hue += 1); // Daha yavaş renk değişimi

    this.handleParticles();
  }
}

PointerParticles.register();

// Loader ve Pop up

window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none"; // Loader'ı gizle
  }, 2000); // Loader en az 1 saniye ekranda kalır, sonra kapanır
});

window.addEventListener("load", function () {
  // Pop-up'ı başlangıçta gizle
  document.getElementById("popup").style.display = "none";

  // Loader'ı gizlemeden önce bir süre bekle
  setTimeout(() => {
    document.getElementById("loading").style.display = "none"; // Loader'ı gizle

    // Loader tamamen kaybolduktan sonra pop-up'ı göster
    setTimeout(() => {
      document.getElementById("popup").style.display = "flex"; // Pop-up'ı göster
    }, 200); // Loader kaybolduktan 200ms sonra pop-up açılır
  }, 1000); // Loader 1 saniye sonra kaybolur
});

function closePopup() {
  let popup = document.getElementById("popup");
  let video = popup.querySelector("video");

  if (video) {
    video.pause(); // Videoyu durdur
    video.currentTime = 0; // Videoyu en başa sar
  }

  popup.style.display = "none"; // Pop-up'ı gizle
}

// Sidebar

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// Öne Çıkan

// Her bir postun içeriğini kendin düzenleyebileceğin sabit posts dizisi:

const posts = [
  {
    id: 1,
    image: "images/one-cikan/yt.jpg",
    description:
      "Her Sene Düzenlediğimiz Yaz Dönemi Youtube Yazılım Eğitimimizin En Son Hali.",
  },
  {
    id: 2,
    image: "images/one-cikan/kutup.jpg",
    description:
      "Sanat, Spor vb. Alanlarda Sosyal Konukları Ağırladığımız Her Sene Düzenlenen Senenin İlk Etkinliği.",
  },
  {
    id: 3,
    image: "images/one-cikan/bioform.jpg",
    description:
      "Her Sene Düzenlenen Biyoteknoloji ve Sağlık Sektörü Gibi Alanları Kapsayan Etkinliğimiz.",
  },
  {
    id: 4,
    image: "images/one-cikan/cafe.jpg",
    description:
      "Çeşitli Mesleklerde İnsanların Gelip Alanında Bilgi Verdiği Tea Talk Formatında Etkinliğimiz.",
  },
  {
    id: 5,
    image: "images/one-cikan/rlc.jpg",
    description:
      "Sektörün En Bilinen Öğrenci Etkinliği Mottolu Her Sene Düzenlediğimiz Etkinliğimiz.",
  },
  {
    id: 6,
    image: "images/one-cikan/final.jpg",
    description:
      "Gece Boyunca Espor Merkezini Kapatıp Oyun Oynadığımız, Turnuvalar Yaptığımız Etkinliğimiz.",
  },
  {
    id: 7,
    image: "images/one-cikan/chat.jpg",
    description:
      "Yazılım ve Computer Science Alanlarında Uzman bir Konuşmacıyla Yaptığımız Tea Talk Formatlı Etkinliğimiz.",
  },
  {
    id: 8,
    image: "images/one-cikan/iltek.jpg",
    description:
      "Her Sene Düzenlenen İletişim ve Bilişim Teknolojileri Günleri Etkinliğimiz.",
  },
  {
    id: 9,
    image: "images/one-cikan/cas.jpg",
    description: "CASMARINE Teknik Takımımızın Çeşitli Eğitimleri.",
  },
  {
    id: 10,
    image: "images/one-cikan/csforge.jpg",
    description: "CS Forge Teknik Takımımızın Oyun Geliştirme Eğitimleri",
  },
  {
    id: 11,
    image: "images/one-cikan/biomech.jpg",
    description:
      "Biomech Teknik Takımımızın Sene İçerisinde Düzenlenen Eğitimleri.",
  },
  {
    id: 12,
    image: "images/one-cikan/kgkttk.jpg",
    description: "Yıl İçinde Düzenlediğimiz Çeşitli Eğiitim ve Workshoplar.",
  },
  {
    id: 13,
    image: "images/one-cikan/teknik.jpg",
    description: "Sene İçerisinde Şirketlere Yaptığımız Teknik Geziler.",
  },
  {
    id: 14,
    image: "images/one-cikan/soylesi.jpg",
    description: "Ünlü Girişimcileri Ağırladığımız Söyleşi Etkinliğimiz.",
  },
];

let activeIndex = 0;
let autoScrollEnabled = true;
let autoScrollInterval;

// Slider elemanlarını seçiyoruz.

const slider = document.getElementById("slider");
const sliderLeft = document.getElementById("slider-left");
const sliderCenter = document.getElementById("slider-center");
const sliderRight = document.getElementById("slider-right");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Slider içeriğini güncelleyen fonksiyon:

function updateSlider() {
  const leftIndex = (activeIndex - 1 + posts.length) % posts.length;
  const rightIndex = (activeIndex + 1) % posts.length;

  sliderLeft.innerHTML = `
      <div class="hidden sm:flex flex flex-col items-center p-2">
        <img src="${posts[leftIndex].image}" alt="${posts[leftIndex].description}" class="h-[15vh] sm:h-[20vh] md:h-[20vh] lg:h-[25vh] xl:h-[30vh] shadow-lg  rounded-lg">
        <p class="text-[10px] text-center mt-2 text-[white]">${posts[leftIndex].description}</p>
      </div>
    `;
  sliderCenter.innerHTML = `
      <div class="flex flex-col items-center p-2">
        <img src="${posts[activeIndex].image}" alt="${posts[activeIndex].description}" class="h-[20vh] sm:h-[25vh] md:h-[25vh] lg:h-[30vh] xl:h-[40vh] shadow-lg rounded-lg">
        <p class="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-center mt-3 text-[#ffa300]">${posts[activeIndex].description}</p>
      </div>
    `;
  sliderRight.innerHTML = `
      <div class="hidden sm:flex flex flex-col items-center p-2">
        <img src="${posts[rightIndex].image}" alt="${posts[rightIndex].description}" class="h-[15vh] sm:h-[20vh] md:h-[20vh] lg:h-[25vh] xl:h-[30vh] rounded-lg shadow-lg">
        <p class="text-[10px] text-center mt-2 text-[white]">${posts[rightIndex].description}</p>
      </div>
    `;
}

// Geçiş animasyonu: fade-out yap, içeriği güncelle, ardından fade-in

function animateTransition(callback) {
  slider.classList.add("opacity-0");
  setTimeout(() => {
    callback();
    slider.classList.remove("opacity-0");
  }, 900);
}

// Sonraki post geçişi

function nextSlide() {
  animateTransition(() => {
    activeIndex = (activeIndex + 1) % posts.length;
    updateSlider();
  });
}

// Önceki post geçişi

function prevSlide() {
  animateTransition(() => {
    activeIndex = (activeIndex - 1 + posts.length) % posts.length;
    updateSlider();
  });
}

// Otomatik kaydırmayı başlatan fonksiyon (7 saniyede bir)

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}

// Manuel kaydırma yapıldığında otomatik kaydırmayı durdurur.

function stopAutoScroll() {
  autoScrollEnabled = false;
  clearInterval(autoScrollInterval);
}

// Başlangıçta slider'ı güncelle ve otomatik kaydırmayı başlat.

updateSlider();
if (autoScrollEnabled) {
  startAutoScroll();
}

// Butonlara tıklama event'leri

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopAutoScroll();
});

nextBtn.addEventListener("click", () => {
  nextSlide();
  stopAutoScroll();
});

// SEO URL

document.addEventListener("DOMContentLoaded", function () {
  // URL'deki path bilgisini al (örn: "/komitelerimiz")
  let path = window.location.pathname.substring(1); // "/" işaretini kaldır

  if (path) {
    let targetElement = document.getElementById(path);
    if (targetElement) {
      // Smooth scroll ile ilgili bölüme kaydır
      targetElement.scrollIntoView({ behavior: "smooth" });

      // Hash kısmını temizle (gizli yönlendirme yapıyoruz)
      history.replaceState(null, null, window.location.pathname);
    }
  }
});

// Komitelerimiz ve Takımlarımız

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
