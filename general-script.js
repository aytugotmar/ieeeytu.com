



// Loader   

window.addEventListener('load', fg_load)

    function fg_load() {
        document.getElementById('loading').style.display = 'none'
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
      image: 'images/one-cikan/yt.jpg',
      description: 'Her Sene Düzenlediğimiz Yaz Dönemi Youtube Yazılım Eğitimimizin En Son Hali.'
    },
    {
      id: 2,
      image: 'images/one-cikan/kutup.jpg',
      description: 'Sanat, Spor vb. Alanlarda Sosyal Konukları Ağırladığımız Her Sene Düzenlenen Senenin İlk Etkinliği.'
    },
    {
      id: 3,
      image: 'images/one-cikan/bioform.jpg',
      description: 'Her Sene Düzenlenen Biyoteknoloji ve Sağlık Sektörü Gibi Alanları Kapsayan Etkinliğimiz.'
    },
    {
      id: 4,
      image: 'images/one-cikan/cafe.jpg',
      description: 'Çeşitli Mesleklerde İnsanların Gelip Alanında Bilgi Verdiği Tea Talk Formatında Etkinliğimiz.'
    },
    {
      id: 5,
      image: 'images/one-cikan/rlc.jpg',
      description: 'Sektörün En Bilinen Öğrenci Etkinliği Mottolu Her Sene Düzenlediğimiz Etkinliğimiz.'
    },
    {
      id: 6,
      image: 'images/one-cikan/final.jpg',
      description: 'Gece Boyunca Espor Merkezini Kapatıp Oyun Oynadığımız, Turnuvalar Yaptığımız Etkinliğimiz.'
    },
    {
      id: 7,
      image: 'images/one-cikan/chat.jpg',
      description: 'Yazılım ve Computer Science Alanlarında Uzman bir Konuşmacıyla Yaptığımız Tea Talk Formatlı Etkinliğimiz.'
    },
    {
      id: 8,
      image: 'images/one-cikan/iltek.jpg',
      description: 'Her Sene Düzenlenen İletişim ve Bilişim Teknolojileri Günleri Etkinliğimiz.'
    },
    {
      id: 9,
      image: 'images/one-cikan/cas.jpg',
      description: 'CASMARINE Teknik Takımımızın Çeşitli Eğitimleri.'
    },
    {
      id: 10,
      image: 'images/one-cikan/csforge.jpg',
      description: 'CS Forge Teknik Takımımızın Oyun Geliştirme Eğitimleri'
    },
    {
      id: 11,
      image: 'images/one-cikan/biomech.jpg',
      description: 'Biomech Teknik Takımımızın Sene İçerisinde Düzenlenen Eğitimleri.'
    },
    {
      id: 12,
      image: 'images/one-cikan/kgkttk.jpg',
      description: 'Yıl İçinde Düzenlediğimiz Çeşitli Eğiitim ve Workshoplar.'
    },
    {
      id: 13,
      image: 'images/one-cikan/teknik.jpg',
      description: 'Sene İçerisinde Şirketlere Yaptığımız Teknik Geziler.'
    },
    {
      id: 14,
      image: 'images/one-cikan/soylesi.jpg',
      description: 'Ünlü Girişimcileri Ağırladığımız Söyleşi Etkinliğimiz.'
    }
  ];
  
  let activeIndex = 0;
  let autoScrollEnabled = true;
  let autoScrollInterval;
  
  // Slider elemanlarını seçiyoruz.

  const slider = document.getElementById('slider');
  const sliderLeft = document.getElementById('slider-left');
  const sliderCenter = document.getElementById('slider-center');
  const sliderRight = document.getElementById('slider-right');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
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
    slider.classList.add('opacity-0');
    setTimeout(() => {
      callback();
      slider.classList.remove('opacity-0');
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

  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoScroll();
  });
  
  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoScroll();
  });





  


  
