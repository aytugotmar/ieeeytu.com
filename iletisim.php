<?php

session_start();

?>

<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8" />
    <meta name="description" content="IEEE YTU İletişim Bize ulaşın." />
    <link
      style="width: 100px"
      rel="icon"
      href="images/logo/cropped-parasut.png"
      type="ieee paraşüt"
    />
    <title>IEEE YTU - İletişim</title>
    <!-- Open Sans Fontu -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
      rel="stylesheet"
    />
    <!-- Font Awesome Kodu -->
    <script
      src="https://kit.fontawesome.com/7d82d2409d.js"
      crossorigin="anonymous"
    ></script>
    <!-- CSS -->
    <link rel="stylesheet" href="iletisim/style.css" />
    <link rel="stylesheet" href="mobile.css" />
    <!-- Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
  </head>

  <body>

    <!-- Loader   -->

    <div id="loading">
      <img src="images/loader.svg" alt="loader">
    </div>


    <!-- Header -->

    <div class="ieee-global">
      <ul class="menu">
        <li><a href="https://www.ieee.org/" target="_blank">IEEE.org</a></li>
        <li>
          <a href="https://ieeextreme.org/" target="_blank">IEEEXTREME</a>
        </li>
        <li>
          <a href="https://standards.ieee.org/" target="_blank"
            >IEEE Standarts</a
          >
        </li>
        <li>
          <a href="https://spectrum.ieee.org/" target="_blank">IEEE Spectrum</a>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank"
            >IEEEXplore</a
          >
        </li>
      </ul>
    </div>

    <nav class="header-menu">
      <div class="logo">
        <a href="https://www.ieeeytu.com">
          <img src="images/logo/ieee-ytu-tranparan.png" alt="Logo" />
        </a>
      </div>

      <!-- Menü -->

      <nav>
        <ul class="sidebar menu">
          <li onclick="closeSidebar()">
            <a href="javascript:void(0)"
              ><i class="fa-solid fa-xmark" style="color: #ffa300"></i
            ></a>
          </li>
          <li><a href="https://www.ieeeytu.com">Ana Sayfa</a></li>
          <li><a href="hakkimizda.html">Hakkımızda</a></li>
          <li><a href="ekibimiz.html">Ekibimiz</a></li>
          <li onclick="closeSidebar()">
            <a href="https://www.ieeeytu.com/index#komitelerimiz">Komitelerimiz</a>
          </li>
          <li onclick="closeSidebar()">
            <a href="https://www.ieeeytu.com/index#takimlarimiz">Teknik Takımlarımız</a>
          </li>
          <li><a href="iletisim.php">İletişim</a></li>
        </ul>

        <ul class="menu">
          <li class="hideOnMobile"><a href="https://www.ieeeytu.com">Ana Sayfa</a></li>
          <li class="hideOnMobile">
            <a href="hakkimizda.html">Hakkımızda</a>
          </li>
          <li class="hideOnMobile">
            <a href="ekibimiz.html">Ekibimiz</a>
          </li>
          <li class="hideOnMobile">
            <a href="https://www.ieeeytu.com/index#komitelerimiz"
              >Komitelerimiz &nbsp;&nbsp;
              <i class="fa-solid fa-chevron-down"></i
            ></a>
            <ul class="hideOnMobile dropdown">
              <li>
                <a href="basin-yayin.html"
                  >Basın-Yayın</a
                >
              </li>
              <li>
                <a href="cas.html"
                  >CAS &nbsp;&nbsp; <i class="fa-solid fa-chevron-right"></i
                ></a>
                <ul class="hideOnMobile dropside">
                  <li>
                    <a href="casmarine.html"
                      >CASMARINE</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="cs.html"
                  >CS &nbsp;&nbsp; <i class="fa-solid fa-chevron-right"></i
                ></a>
                <ul class="hideOnMobile dropside">
                  <li>
                    <a href="cs-forge.html"
                      >CS FORGE</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="embs.html"
                  >EMBS &nbsp;&nbsp; <i class="fa-solid fa-chevron-right"></i
                ></a>
                <ul class="hideOnMobile dropside">
                  <li>
                    <a href="biomech.html"
                      >BIOMECH</a
                    >
                  </li>
                </ul>
              </li>
              <li><a href="iltek.html">İLTEK</a></li>
              <li><a href="kgk.html">KGK</a></li>
              <li><a href="rlc.html">RLC</a></li>
              <li><a href="ttk.html">TTK</a></li>
              <li><a href="wie.html">WIE</a></li>
              <li><a href="yp.html">YP</a></li>
            </ul>
          </li>
          <li class="hideOnMobile">
            <a href="iletisim.php">İletişim</a>
          </li>
          <li
            class="menu-button"
            onclick="showSidebar()"
            style="margin-left: 1px"
          >
            <a href="javascript:void(0)"
              ><i class="fa-solid fa-bars" style="color: #ffa300"></i
            ></a>
          </li>
        </ul>
      </nav>


      <div class="social-links">
        <a
          href="https://www.facebook.com/ieeeytu/?locale=tr_TR"
          target="_blank"
          class="social-icon"
        >
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/ieeeytu/"
          target="_blank"
          class="social-icon"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://x.com/ieeeytu" target="_blank" class="social-icon">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a
          href="https://www.tiktok.com/@ieeeytu"
          target="_blank"
          class="social-icon"
        >
          <i class="fa-brands fa-tiktok"></i>
        </a>
        <a
          href="https://www.youtube.com/user/YTUIEEE"
          target="_blank"
          class="social-icon"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/ytu-ieee-student-branch/posts/?feedView=all"
          target="_blank"
          class="social-icon"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </nav>

    <br /><br />

    <!-- Ana İçerik -->
    <div id="ana-icerik">

      <!-- İletişim Formu  -->

      <div class="container my-4">

        <h2 class="my-3">Bize Yazın</h2>

        <div class="row g-2">
          <div class="col-md-6">
            <div class="card bg-dark">
              <div class="card-body">

                <?php  if(isset($_SESSION["alert"])) { ?>

                  <div class="alert alert-<?php echo $_SESSION["alert"]["type"]; ?>">

                      <?php   echo $_SESSION ["alert"] ["message"];   ?>

                  </div>

                  <?php unset($_SESSION["alert"]); ?>

                <?php } ?>


                <form class="row g-3 text-white" action="iletisim/send-email" method="post">
                  <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="name" class="form-label">İsim-Soyisim</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="name" class="form-label"
                      >Telefon Numarası</label
                    >
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="subject" class="form-label">Konu</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="message" class="form-label">Mesaj</label>
                    <textarea
                      name="message"
                      id="message"
                      class="form-control"
                      required
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-outline-warning" style="width: 100%">
                      Gönder
                    </button>
                  </div>
                </form>
                <div id="resultMessage" class="mt-3"></div>
              </div>
            </div>

          </div>

          <!-- Harita   -->

          <div class="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.826548052647!2d28.887684775899604!3d41.029050571347696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbcbc39e5b81%3A0xf74c10008ae5e8c6!2zSUVFRSDDlsSfcmVuY2kgS3Vsw7xiw7w!5e0!3m2!1str!2str!4v1738697084260!5m2!1str!2str"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>

      <br /><br /><br /><br />
    </div>

   <!-- Footer -->

   <nav class="footer-menu-main">
      <div class="footer-menu">
        <ul class="footer-menu">
          <li><a href="https://www.ieeeytu.com">Ana Sayfa</a></li>
          <li><a href="hakkimizda.html">Hakkımızda</a></li>
          <li><a href="ekibimiz.html">Ekibimiz</a></li>
          <li><a href="index#komitelerimiz">Komitelerimiz</a></li>
          <li><a href="iletisim.php">İletişim</a></li>
        </ul>
      </div>
      <div class="footer-logo">
        <a href="https://www.ieeeytu.com">
          <img src="images/logo/ieee-ytu-tranparan.png" alt="24.-yıl-logo" />
        </a>
      </div>


      <div class="footer-social">
        <a
          href="https://www.facebook.com/ieeeytu/?locale=tr_TR"
          target="_blank"
          class="social-icon"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/ieeeytu/"
          target="_blank"
          class="social-icon"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://x.com/ieeeytu" target="_blank" class="social-icon">
          <i class="fab fa-x-twitter"></i>
        </a>
        <a
          href="https://www.tiktok.com/@ieeeytu"
          target="_blank"
          class="social-icon"
        >
          <i class="fab fa-tiktok"></i>
        </a>
        <a
          href="https://www.youtube.com/user/YTUIEEE"
          target="_blank"
          class="social-icon"
        >
          <i class="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/ytu-ieee-student-branch/posts/?feedView=all"
          target="_blank"
          class="social-icon"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </nav>

    <div class="footer-menu-copyright">
      <p>
        2025 Copyright &nbsp; <i class="fa-regular fa-copyright"></i> &nbsp; Tüm
        Hakları Saklıdır. IEEE YTU Student Branch
      </p>
    </div>

    <script src="iletisim/script.js"></script>
    
  </body>
</html>
