<template>
  <div>
    <div class="rewall_fn_mobilemenu_wrap">
      <!-- LOGO & HAMBURGER -->
      <div class="logo_hamb">
        <div class="in">
          <div class="menu_logo">
            <nuxt-link to="/">
              <img src="img/logo-light.png" alt="">
            </nuxt-link>
          </div>
          <div class="hamburger hamburger--collapse-r">
            <div class="hamburger-box">
              <div class="hamburger-inner" />
            </div>
          </div>
        </div>
      </div>
      <!-- /LOGO & HAMBURGER -->
      <!-- MOBILE DROPDOWN MENU -->
      <div class="mobilemenu">
        <div>
          <ul class="anchor_nav vert_menu_list">
            <li class="current">
              <a href="#about">{{ $t("home") }}</a>
            </li>
            <li><a href="#biography">{{ $t("biography") }}</a></li>
            <li><a href="#portfolio">{{ $t("portfolio") }}</a></li>
            <!-- <li><a href="#service">{{ $t("services") }}</a></li>
            <li><a href="#customer">{{ $t("customers") }}</a></li>
            <li><a href="#blog">{{ $t("news") }}</a></li>
            <li><a href="#contact">{{ $t("contact") }}</a></li> -->
            <li>
              <p class="color-white" @click="() => changeLanguage($t('lang'))">
                {{ $t("lang") }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- /MOBILE DROPDOWN MENU -->
    </div>

    <!-- Color Scheme -->
    <div class="rewall_fn_color_scheme">
      <a class="opener" href="#">
        <img src="svg/color.svg" alt="" class="fn__svg">
      </a>
      <div class="color_box">
        <a href="#" class="closer">
          <img src="svg/cancel.svg" alt="" class="fn__svg">
        </a>
        <ul>
          <li class="item">
            <h5>Online clothing store</h5>
            <ul>
              <li><a href="#" data-color="#5d6e99" /></li>
              <li><a href="#" data-color="#b18780" /></li>
              <li><a href="#" data-color="#605e2d" /></li>
              <li><a href="#" data-color="#7c554e" /></li>
              <li><a href="#" data-color="#f4988b" /></li>
              <li><a href="#" data-color="#dfc1b6" /></li>
              <li><a href="#" data-color="#c77fb1" /></li>
              <li><a href="#" data-color="#a9aa71" /></li>
              <li><a href="#" data-color="#96939c" /></li>
              <li><a href="#" data-color="#f36b51" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Website for women's clothing, accessories and jewelry store</h5>
            <ul>
              <li><a href="#" data-color="#3e1c1d" /></li>
              <li><a href="#" data-color="#694141" /></li>
              <li><a href="#" data-color="#532c27" /></li>
              <li><a href="#" data-color="#7b5650" /></li>
              <li><a href="#" data-color="#2d1012" /></li>
              <li><a href="#" data-color="#92665d" /></li>
              <li><a href="#" data-color="#a9806e" /></li>
              <li><a href="#" data-color="#c29d83" /></li>
              <li><a href="#" data-color="#710e3d" /></li>
              <li><a href="#" data-color="#96285b" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Wedding salon website</h5>
            <ul>
              <li><a href="#" data-color="#e397b1" /></li>
              <li><a href="#" data-color="#ce7d7a" /></li>
              <li><a href="#" data-color="#a58264" /></li>
              <li><a href="#" data-color="#600b28" /></li>
              <li><a href="#" data-color="#5e2c21" /></li>
              <li><a href="#" data-color="#e8d5c1" /></li>
              <li><a href="#" data-color="#3c0f12" /></li>
              <li><a href="#" data-color="#b47f77" /></li>
              <li><a href="#" data-color="#634352" /></li>
              <li><a href="#" data-color="#11131f" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Website on the topic of cars</h5>
            <ul>
              <li><a href="#" data-color="#0d0208" /></li>
              <li><a href="#" data-color="#170b19" /></li>
              <li><a href="#" data-color="#3a0f18" /></li>
              <li><a href="#" data-color="#661615" /></li>
              <li><a href="#" data-color="#181c39" /></li>
              <li><a href="#" data-color="#1a344f" /></li>
              <li><a href="#" data-color="#0d4d66" /></li>
              <li><a href="#" data-color="#09637e" /></li>
              <li><a href="#" data-color="#0b89a0" /></li>
              <li><a href="#" data-color="#0fa5c0" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Entertainment website</h5>
            <ul>
              <li><a href="#" data-color="#c851ad" /></li>
              <li><a href="#" data-color="#ac3a9c" /></li>
              <li><a href="#" data-color="#682374" /></li>
              <li><a href="#" data-color="#60226f" /></li>
              <li><a href="#" data-color="#7f78ac" /></li>
              <li><a href="#" data-color="#4c8ca8" /></li>
              <li><a href="#" data-color="#7354b1" /></li>
              <li><a href="#" data-color="#151a75" /></li>
              <li><a href="#" data-color="#4b1549" /></li>
              <li><a href="#" data-color="#2c0929" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Home Decor Shop</h5>
            <ul>
              <li><a href="#" data-color="#4f4232" /></li>
              <li><a href="#" data-color="#f3d9b6" /></li>
              <li><a href="#" data-color="#afc15d" /></li>
              <li><a href="#" data-color="#8e4c29" /></li>
              <li><a href="#" data-color="#250c08" /></li>
              <li><a href="#" data-color="#f6ba88" /></li>
              <li><a href="#" data-color="#f59e82" /></li>
              <li><a href="#" data-color="#421b0c" /></li>
              <li><a href="#" data-color="#af9a7d" /></li>
              <li><a href="#" data-color="#242408" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Photographer's site</h5>
            <ul>
              <li><a href="#" data-color="#673b28" /></li>
              <li><a href="#" data-color="#77482c" /></li>
              <li><a href="#" data-color="#49271e" /></li>
              <li><a href="#" data-color="#795d48" /></li>
              <li><a href="#" data-color="#916a41" /></li>
              <li><a href="#" data-color="#301615" /></li>
              <li><a href="#" data-color="#92785f" /></li>
              <li><a href="#" data-color="#dfd3d3" /></li>
              <li><a href="#" data-color="#c8b7af" /></li>
              <li><a href="#" data-color="#ae9883" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Sports website</h5>
            <ul>
              <li><a href="#" data-color="#12151a" /></li>
              <li><a href="#" data-color="#2b2219" /></li>
              <li><a href="#" data-color="#024387" /></li>
              <li><a href="#" data-color="#9fa792" /></li>
              <li><a href="#" data-color="#907608" /></li>
              <li><a href="#" data-color="#121e1a" /></li>
              <li><a href="#" data-color="#200f08" /></li>
              <li><a href="#" data-color="#730101" /></li>
              <li><a href="#" data-color="#574c1e" /></li>
              <li><a href="#" data-color="#3e3e36" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Restaurant website</h5>
            <ul>
              <li><a href="#" data-color="#e8c992" /></li>
              <li><a href="#" data-color="#dda742" /></li>
              <li><a href="#" data-color="#db901b" /></li>
              <li><a href="#" data-color="#e08f02" /></li>
              <li><a href="#" data-color="#c66507" /></li>
              <li><a href="#" data-color="#b07857" /></li>
              <li><a href="#" data-color="#aa2c05" /></li>
              <li><a href="#" data-color="#7d1d07" /></li>
              <li><a href="#" data-color="#450f03" /></li>
              <li><a href="#" data-color="#371001" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Real estate website</h5>
            <ul>
              <li><a href="#" data-color="#b97d47" /></li>
              <li><a href="#" data-color="#d5c697" /></li>
              <li><a href="#" data-color="#888365" /></li>
              <li><a href="#" data-color="#624a25" /></li>
              <li><a href="#" data-color="#a74c1d" /></li>
              <li><a href="#" data-color="#ef8b50" /></li>
              <li><a href="#" data-color="#9ca816" /></li>
              <li><a href="#" data-color="#7c8824" /></li>
              <li><a href="#" data-color="#596c10" /></li>
              <li><a href="#" data-color="#363112" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Medical website</h5>
            <ul>
              <li><a href="#" data-color="#0d0a11" /></li>
              <li><a href="#" data-color="#262431" /></li>
              <li><a href="#" data-color="#575c6f" /></li>
              <li><a href="#" data-color="#a7a7b1" /></li>
              <li><a href="#" data-color="#d7d1db" /></li>
              <li><a href="#" data-color="#babfd2" /></li>
              <li><a href="#" data-color="#a1b9d5" /></li>
              <li><a href="#" data-color="#869dd1" /></li>
              <li><a href="#" data-color="#5576ac" /></li>
              <li><a href="#" data-color="#133167" /></li>
              <li><a href="#" data-color="#132017" /></li>
              <li><a href="#" data-color="#1d8a6b" /></li>
              <li><a href="#" data-color="#4e7c60" /></li>
              <li><a href="#" data-color="#689a81" /></li>
              <li><a href="#" data-color="#255641" /></li>
              <li><a href="#" data-color="#97c8b3" /></li>
              <li><a href="#" data-color="#d5e0d0" /></li>
              <li><a href="#" data-color="#5a4b24" /></li>
              <li><a href="#" data-color="#4ab89d" /></li>
              <li><a href="#" data-color="#a18e63" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Travel agency website</h5>
            <ul>
              <li><a href="#" data-color="#e4e0dd" /></li>
              <li><a href="#" data-color="#1a9ca9" /></li>
              <li><a href="#" data-color="#e77992" /></li>
              <li><a href="#" data-color="#40333a" /></li>
              <li><a href="#" data-color="#97b6cb" /></li>
              <li><a href="#" data-color="#6388a2" /></li>
              <li><a href="#" data-color="#b1c1ce" /></li>
              <li><a href="#" data-color="#7bc8dc" /></li>
              <li><a href="#" data-color="#a5c3db" /></li>
              <li><a href="#" data-color="#57c2d4" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Business website</h5>
            <ul>
              <li><a href="#" data-color="#efb38e" /></li>
              <li><a href="#" data-color="#8a5d4a" /></li>
              <li><a href="#" data-color="#fef3d5" /></li>
              <li><a href="#" data-color="#9a563f" /></li>
              <li><a href="#" data-color="#aea5a0" /></li>
              <li><a href="#" data-color="#943014" /></li>
              <li><a href="#" data-color="#253d49" /></li>
              <li><a href="#" data-color="#48312b" /></li>
              <li><a href="#" data-color="#e5c7ad" /></li>
              <li><a href="#" data-color="#" /></li>
              <li><a href="#" data-color="#beb8ac" /></li>
              <li><a href="#" data-color="#697569" /></li>
              <li><a href="#" data-color="#203331" /></li>
              <li><a href="#" data-color="#b82921" /></li>
              <li><a href="#" data-color="#ee3834" /></li>
              <li><a href="#" data-color="#732c30" /></li>
              <li><a href="#" data-color="#050601" /></li>
              <li><a href="#" data-color="#3a261d" /></li>
              <li><a href="#" data-color="#746756" /></li>
              <li><a href="#" data-color="#8c7b71" /></li>
              <li><a href="#" data-color="#0f2936" /></li>
              <li><a href="#" data-color="#5b737f" /></li>
              <li><a href="#" data-color="#d1f3ff" /></li>
              <li><a href="#" data-color="#b3d3fc" /></li>
              <li><a href="#" data-color="#4870a3" /></li>
              <li><a href="#" data-color="#19375b" /></li>
              <li><a href="#" data-color="#142132" /></li>
              <li><a href="#" data-color="#020a17" /></li>
              <li><a href="#" data-color="#18192e" /></li>
              <li><a href="#" data-color="#333a57" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Lawyer website</h5>
            <ul>
              <li><a href="#" data-color="#948d95" /></li>
              <li><a href="#" data-color="#d2d2c6" /></li>
              <li><a href="#" data-color="#55566b" /></li>
              <li><a href="#" data-color="#8d98ac" /></li>
              <li><a href="#" data-color="#dfccbd" /></li>
              <li><a href="#" data-color="#6a5751" /></li>
              <li><a href="#" data-color="#40050b" /></li>
              <li><a href="#" data-color="#ebe8df" /></li>
              <li><a href="#" data-color="#50401e" /></li>
              <li><a href="#" data-color="#224622" /></li>
            </ul>
          </li>
          <li class="item">
            <h5>Online electronics store</h5>
            <ul>
              <li><a href="#" data-color="#d8ab2a" /></li>
              <li><a href="#" data-color="#e7b731" /></li>
              <li><a href="#" data-color="#cc9926" /></li>
              <li><a href="#" data-color="#1b140a" /></li>
              <li><a href="#" data-color="#875e32" /></li>
              <li><a href="#" data-color="#ebc443" /></li>
              <li><a href="#" data-color="#ac801d" /></li>
              <li><a href="#" data-color="#4e341b" /></li>
              <li><a href="#" data-color="#ac815e" /></li>
              <li><a href="#" data-color="#caa13d" /></li>
              <li><a href="#" data-color="#272027" /></li>
              <li><a href="#" data-color="#1d1419" /></li>
              <li><a href="#" data-color="#826583" /></li>
              <li><a href="#" data-color="#2f111b" /></li>
              <li><a href="#" data-color="#3e2137" /></li>
              <li><a href="#" data-color="#523e4a" /></li>
              <li><a href="#" data-color="#4d6895" /></li>
              <li><a href="#" data-color="#6ec9e4" /></li>
              <li><a href="#" data-color="#2d2f46" /></li>
              <li><a href="#" data-color="#334867" /></li>
            </ul>
          </li>
        </ul>
        <div class="info">
          <div class="current" />
          <div class="separator" />
          <div class="total" />
        </div>
        <div class="my__nav">
          <a
            href="#"
            class="prev"
          ><img
            src="svg/right-arrow.svg"
            alt=""
            class="fn__svg"
          ></a>
          <a
            href="#"
            class="next"
          ><img
            src="svg/right-arrow.svg"
            alt=""
            class="fn__svg"
          ></a>
        </div>
      </div>
    </div>
    <!-- /Color Scheme -->

    <!-- Left Sidebar -->
    <!-- You can set up minimum and maximum width for sidebar (in px). Minimum width is 350 -->
    <div class="rewall_fn_sidebar" data-max="800" data-min="350">
      <!-- Sidebar: Close Button -->
      <a href="#" class="nav__button">
        <span
          class="icon"
        ><img
          src="svg/right-arrow.svg"
          alt=""
          class="fn__svg"
        ></span>
        <span class="width_indicator" />
      </a>
      <!-- /Sidebar: Close Button -->

      <!-- Sidebar: Line -->
      <div class="nav_line" />
      <!-- /Sidebar: Line -->

      <!-- Sidebar: content -->
      <div class="sidebar_in">
        <div class="logo">
          <nuxt-link to="/">
            <img src="img/logo.png" alt="">
          </nuxt-link>
        </div>
        <div class="navigation">
          <ul class="anchor_nav">
            <li class="current">
              <a href="#about">{{ $t("home") }}</a>
            </li>
            <li><a href="#biography">{{ $t("biography") }}</a></li>
            <li><a href="#portfolio">{{ $t("portfolio") }}</a></li>
            <!-- <li><a href="#service">{{ $t("services") }}</a></li>
            <li><a href="#customer">{{ $t("customers") }}</a></li>
            <li><a href="#blog">{{ $t("news") }}</a></li>
            <li><a href="#contact">{{ $t("contact") }}</a></li> -->
            <li>
              <p @click="() => changeLanguage($t('lang'))">
                {{ $t("lang") }}
              </p>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <div class="social">
            <ul>
              <li>
                <a
                  href="https://github.com/BruceGoodGuy"
                ><img
                  src="svg/social/github.svg"
                  alt=""
                  class="fn__svg"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/khoauth/"
                ><img
                  src="svg/social/facebook.svg"
                  alt=""
                  class="fn__svg"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pleasecallmebruce/"
                ><img
                  src="svg/social/instagram.svg"
                  alt=""
                  class="fn__svg"
                ></a>
              </li>
              <!-- <li>
                <a
                  href="#"
                ><img
                  src="svg/social/pinterest.svg"
                  alt=""
                  class="fn__svg"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                ><img
                  src="svg/social/youtube.svg"
                  alt=""
                  class="fn__svg"
                ></a>
              </li> -->
            </ul>
          </div>
          <div class="desc">
            <p>
              © 2021 Bruce
            </p>
          </div>
        </div>
      </div>
      <!-- Sidebar: content -->
    </div>
    <!-- /Left Sidebar -->
  </div>
</template>
<script>
export default {
  methods: {
    changeLanguage (la) {
      const lang = la.toLocaleLowerCase().slice(0, 2)
      this.$store.commit('i18n/SET_LANG', lang)
      this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${lang}` })
    }
  }
}
</script>
