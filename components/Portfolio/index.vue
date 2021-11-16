<template>
  <!-- Portfolio Section -->
  <section id="portfolio" class="portfolio">
    <!-- Main Title -->
    <div class="main_title center">
      <div class="container max880">
        <h3>Portfolio</h3>
        <p>
          {{ $t('suck') }}
        </p>
        <!-- <div class="main_button">
          <a href="#contact">If you are interested, Get in Touch With Me</a>
        </div> -->
      </div>
    </div>
    <!-- /Main Title -->

    <div class="portfolio_list">
      <div class="container">
        <ul class="fn__masonry">
          <li class="masonry_in">
            <div class="item">
              <div class="title_holder">
                <h3>
                  <a
                    class="zoom"
                    href="img/portfolio/1.png"
                    data-title="Skillive"
                  >Skillive.com</a>
                </h3>
                <p>{{ $t('skillive.work') }}</p>
                <p>{{ $t('skillive.tech') }}</p>
              </div>

              <div class="img_holder">
                <a
                  class="zoom"
                  href="img/portfolio/1.png"
                  data-title="Skillive"
                />
                <img src="img/portfolio/1.png" alt="">
                <div class="abs_img" data-bg-img="img/portfolio/1.png" />
              </div>
            </div>
          </li>

          <li class="masonry_in">
            <div class="item">
              <div class="title_holder">
                <h3>
                  <a
                    class="zoom"
                    href="img/portfolio/4.png"
                    data-title="Beauty navi"
                  >Beauty navi</a>
                </h3>
                <p>{{ $t('bn.work') }}</p>
                <p>{{ $t('bn.tech') }}</p>
              </div>

              <div class="img_holder">
                <a
                  class="zoom"
                  href="img/portfolio/4.png"
                  data-title="Beauty navi"
                />
                <img src="img/portfolio/4.png" alt="">
                <div class="abs_img" data-bg-img="img/portfolio/4.png" />
              </div>
            </div>
          </li>

          <li class="masonry_in">
            <div class="item">
              <div class="title_holder">
                <h3>
                  <a
                    class="zoom"
                    href="img/portfolio/5.png"
                    data-title="Skillive"
                  >This Page</a>
                </h3>
                <p>{{ $t('this.tech') }}</p>
              </div>

              <div class="img_holder">
                <a
                  class="zoom"
                  href="img/portfolio/5.png"
                  data-title="Skillive"
                />
                <img src="img/portfolio/5.png" alt="">
                <div class="abs_img" data-bg-img="img/portfolio/5.png" />
              </div>
            </div>
          </li>

          <li class="masonry_in">
            <div class="item">
              <div class="title_holder">
                <h3>
                  <a
                    class="zoom"
                    href="img/portfolio/2.png"
                    data-title="fuzuki-law.com/fchat/"
                  >fuzuki-law.com/fchat/</a>
                </h3>
                <p>{{ $t('law.work') }}</p>
                <p>{{ $t('law.tech') }}</p>
              </div>

              <div class="img_holder">
                <a
                  class="zoom"
                  href="img/portfolio/2.png"
                  data-title="fuzuki-law.com/fchat/"
                />
                <img src="img/portfolio/2.png" alt="">
                <div class="abs_img" data-bg-img="img/portfolio/2.png" />
              </div>
            </div>
          </li>

          <li class="masonry_in">
            <div class="item">
              <div class="title_holder">
                <h3>
                  <a
                    class="zoom"
                    href="img/portfolio/3.jpg"
                    data-title="Hudson"
                  >Hudson</a>
                </h3>
                <p>{{ $t('hudson.work') }}</p>
                <p>{{ $t('hudson.tech') }}</p>
              </div>

              <div class="img_holder">
                <a
                  class="zoom"
                  href="img/portfolio/3.jpg"
                  data-title="Hudson"
                />
                <img src="img/portfolio/3.jpg" alt="">
                <div class="abs_img" data-bg-img="img/portfolio/3.jpg" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- /Portfolio Section -->
</template>
