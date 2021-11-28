<template>
  <!-- Biography Section -->
  <section id="biography" class="biography">
    <!-- Main Title -->
    <div class="main_title center">
      <div class="container max880">
        <h3>{{ $t("biography") }}</h3>
        <p>
          {{ $t("biography_intro") }}
        </p>
      </div>
    </div>
    <!-- /Main Title -->
    <!-- "name": "Name",
    "name.me": "Bruce Nguyen",
    "birthday": "Birthday",
    "birthday.me": "November 11, 1995",
    "age": "Age",
    "age.me": "26 Years",
    "address": "Adress",
    "address.me": "HCM, VN",
    "phone": "Phone",
    "phone.me": "(+84) 3290 90XXX",
    "skype": "Skype",
    "skype.me": "dangkhoanguyen1195",
    "email": "Email",
    "email.me": "khoauth@gmail.com",
    "telegram": "Telegram",
    "Telegram": "Available" -->
    <!-- Info Items -->
    <div class="fn_cs_info_items">
      <div class="container">
        <div class="row">
          <ul>
            <li class="wow fadeInUp" data-wow-delay="0s">
              <p>
                {{ $t("name") }}: <span>{{ $t("name.me") }}</span>
              </p>
            </li>
            <li class="wow fadeInUp" data-wow-delay="0.15s">
              <p>
                {{ $t("birthday") }}: <span>{{ $t("birthday.me") }}</span>
              </p>
            </li>
            <li class="wow fadeInUp" data-wow-delay="0.3s">
              <p>
                {{ $t("age") }}: <span>{{ $t("age.me") }}</span>
              </p>
            </li>
            <li class="wow fadeInUp" data-wow-delay="0.45s">
              <p>{{ $t("address") }}: <span>{{ $t("address.me") }}</span></p>
            </li>
            <li class="wow fadeInUp" data-wow-delay="0.6s">
              <p>
                {{ $t("phone") }}:
                <span><a href="#">{{ $t("phone.me") }}</a></span>
              </p>
            </li>
            <li class="wow fadeInUp" data-wow-delay="0.75s">
              <p>{{ $t("skype") }}: <span>{{ $t("skype.me") }}</span></p>
            </li>
            <li class="wow fadeInUp" data-wow-delay="0.9s">
              <p>
                {{ $t("email") }}:
                <span><a
                  :href="'mailto:'+$t('email.me')"
                >{{ $t('email.me') }}</a></span>
              </p>
            </li>
            <li class="wow fadeInUp" data-wow-delay="1.05s">
              <p>{{ $t('telegram') }}: <span>{{ $t('telegram.me') }}</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /Info Items -->

    <!-- Download CV Button -->
    <div class="fn_cs_cv_btn">
      <div class="container">
        <span class="line top_hover" />
        <span class="line bottom_hover" />
        <span class="line top" />
        <span class="line bottom" />
        <a href="cv/KhoaNguyenResume.pdf" download>
          <span class="icon">
            <img src="svg/inbox.svg" alt="" class="fn__svg">
            <img src="svg/arrow.svg" alt="" class="fn__svg arrow">
          </span>
          <span>{{ $t('downloadCV') }}</span>
        </a>
      </div>
    </div>
    <!-- /Download CV Button -->

    <!-- Tabs Shortcode -->
    <div class="fn_cs_tabs">
      <div class="container max880">
        <div class="row">
          <!-- Tab: Header -->
          <div class="tab_header">
            <ul>
              <li class="active">
                <a href="#tab1">{{ $t('experience') }}</a>
              </li>
              <li><a href="#tab2">{{ $t('education') }}</a></li>
              <li><a href="#tab3">{{ $t('skills') }}</a></li>
            </ul>
          </div>
          <!-- /Tab: Header -->

          <!-- Tab: Content -->
          <div class="tab_content">
            <!-- #1 tab content -->
            <div id="tab1" class="tab_item active">
              <!-- Boxed List -->
              <div class="fn_cs_boxed_list">
                <ul>
                  <li>
                    <div class="item">
                      <div class="item_top">
                        <h3>{{ $t('systemexe') }}</h3>
                        <span>{{ $t('systemexe.time') }}</span>
                      </div>
                      <h3>{{ $t('systemexe.level') }}</h3>
                      <p>
                        {{ $t('systemexe.bio') }}
                      </p>
                      <hr>
                      <p>{{ $t('feature.project') }}</p>
                      <b>Beauty Navi</b>
                      <p>{{ $t('bn.bio') }}</p>
                      <p>{{ $t('size') }} 10 {{ $t('members') }}</p>
                      <p>{{ $t('technology') }}: Laravel 7, jQuery, PostgreSQL</p>
                      <p>{{ $t('role') }}: {{ $t('developer') }} (FrontEnd, Backend, {{ $t('database') }})</p>
                      <br>
                      <b>Droom - Mypage</b>
                      <p>{{ $t('bd.bio') }}</p>
                      <p>{{ $t('technology') }}: Laravel 8, angular 7, MySQL</p>
                      <p>{{ $t('role') }}: {{ $t('developer') }} (Front-End, Back-End, {{ $t('database') }})</p>
                    </div>
                  </li>
                  <li>
                    <div class="item">
                      <div class="item_top">
                        <h3>Freelancer</h3>
                        <span>{{ $t('systemexe.time') }}</span>
                      </div>
                      <h3>{{ $t('systemexe.level') }}</h3>
                      <hr>
                      <p>{{ $t('feature.project') }}</p>
                      <b>Hokennavi</b>
                      <p>{{ $t('bd.manage') }}</p>
                      <p>{{ $t('size') }} 1 {{ $t('member') }}</p>
                      <p>{{ $t('link') }} https://www.hokennavi.jp/</p>
                      <p>{{ $t('technology') }}: Laravel 8, Vue.js</p>
                      <p>{{ $t('role') }}: {{ $t('developer') }} (Front-End, Back-End, {{ $t('database') }})</p>
                      <br>
                      <b>Utop</b>
                      <p>{{ $t('link') }} https://utop.vn/</p>
                      <p>{{ $t('utop') }}</p>
                      <p>{{ $t('size') }} 2 {{ $t('members') }}</p>
                      <p>{{ $t('technology') }}: Laravel 7, jQuery</p>
                      <p>{{ $t('role') }}: {{ $t('developer') }} (FrontEnd, Backend)</p>
                      <br>
                      <b>Skillive</b>
                      <p>{{ $t('link') }} https://skillive.com/</p>
                      <p>{{ $t('skillives') }}</p>
                      <p>{{ $t('size') }} 2 {{ $t('members') }}</p>
                      <p>{{ $t('technology') }}: Laravel 7, jQuery, mySQL</p>
                      <p>{{ $t('role') }}: {{ $t('developer') }} (FrontEnd, Backend, {{ $t('database') }})</p>
                      <br>
                      <b>fuzuki-law</b>
                      <p>{{ $t('survey') }}</p>
                      <p>{{ $t('size') }} 1 {{ $t('member') }}</p>
                      <p>{{ $t('link') }} http://fuzuki-law.com/fchat/</p>
                      <p>{{ $t('technology') }}: Laravel 8, Google Sheet API, jQuery</p>
                      <p>{{ $t('role') }}: {{ $t('developer') }} (Front-End, Back-End, {{ $t('database') }})</p>
                      <br>
                      <b>Bruce'page</b>
                      <p>{{ $t('br') }}</p>
                      <p>{{ $t('size') }} 1 {{ $t('member') }}</p>
                      <p>{{ $t('link') }} https://brucespage.herokuapp.com/</p>
                      <p>{{ $t('technology') }}: Nuxt.js</p>
                      <p>GitHub: https://github.com/BruceGoodGuy/brucesblog</p>
                      <p>{{ $t('role') }}: {{ $t('developer') }}</p>
                      <br>
                    </div>
                  </li>
                  <li>
                    <div class="item">
                      <div class="item_top">
                        <h3>{{ $t('tma') }}</h3>
                        <span>{{ $t('tma.time') }}</span>
                      </div>
                      <h3>{{ $t('tma.level') }}</h3>
                      <p>
                        {{ $t('tma.bio') }}
                      </p>
                      <hr>
                      <p>{{ $t('feature.project') }}</p>
                      <b>MoveMind Admin</b>
                      <p>{{ $t('gym') }}</p>
                      <p>{{ $t('size') }} 6 {{ $t('members') }}</p>
                      <p>{{ $t('technology') }}: Vue.js, Laravel</p>
                      <p>{{ $t('role') }}: {{ $t('developer') }} (Front-End, Back-End, {{ $t('database') }})</p>
                      <br>
                      <b>KANDY</b>
                      <p>{{ $t('ip') }}</p>
                      <p>{{ $t('size') }} 10 {{ $t('members') }}</p>
                      <p>{{ $t('technology') }}: PHP, AngularJS</p>
                      <p>{{ $t('role') }}: {{ $t('developer') }} (Backend)</p>
                      <br>
                      <b>Hudson</b>
                      <p>{{ $t('hudson') }}</p>
                      <p>{{ $t('size') }} 10 {{ $t('members') }}</p>
                      <p>{{ $t('technology') }}: React, AWS, Node.js</p>
                      <p>{{ $t('role') }}: {{ $t('developer') }} (Front-End, Back-End, {{ $t('database') }})</p>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- /Boxed List -->
            </div>
            <!-- /#1 tab content -->

            <!-- #2 tab content -->
            <div id="tab2" class="tab_item">
              <!-- Boxed List -->
              <div class="fn_cs_boxed_list">
                <ul>
                  <li>
                    <div class="item">
                      <div class="item_top">
                        <h5>{{ $t('school') }}</h5>
                        <span>( 2014 — 2018 )</span>
                      </div>
                      <h3>{{ $t('school.type') }}</h3>
                      <p>
                        {{ $t('school.gpa') }}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- /Boxed List -->
            </div>
            <!-- /#2 tab content -->

            <!-- #3 tab content -->
            <div id="tab3" class="tab_item">
              <!-- Progress Bar -->
              <div class="fn_cs_progress_bar">
                <div class="progress_item" data-value="78">
                  <div class="item_in">
                    <h3 class="progress_title">
                      HTML5 &amp; CSS3
                    </h3>
                    <span class="progress_percent" />
                    <div class="progress_bg" />
                  </div>
                </div>

                <div class="progress_item" data-value="70">
                  <div class="item_in">
                    <h3 class="progress_title">
                      jQuery
                    </h3>
                    <span class="progress_percent" />
                    <div class="progress_bg" />
                  </div>
                </div>

                <div class="progress_item" data-value="80">
                  <div class="item_in">
                    <h3 class="progress_title">
                      Vue.js
                    </h3>
                    <span class="progress_percent" />
                    <div class="progress_bg" />
                  </div>
                </div>

                <div class="progress_item" data-value="78">
                  <div class="item_in">
                    <h3 class="progress_title">
                      React
                    </h3>
                    <span class="progress_percent" />
                    <div class="progress_bg" />
                  </div>
                </div>

                <div class="progress_item" data-value="70">
                  <div class="item_in">
                    <h3 class="progress_title">
                      Angular
                    </h3>
                    <span class="progress_percent" />
                    <div class="progress_bg" />
                  </div>
                </div>

                <div class="progress_item" data-value="80">
                  <div class="item_in">
                    <h3 class="progress_title">
                      Laravel (PHP)
                    </h3>
                    <span class="progress_percent" />
                    <div class="progress_bg" />
                  </div>
                </div>

                <div class="progress_item" data-value="68">
                  <div class="item_in">
                    <h3 class="progress_title">
                      Node.js
                    </h3>
                    <span class="progress_percent" />
                    <div class="progress_bg" />
                  </div>
                </div>
              </div>
              <!-- /Progress Bar -->

              <!-- Description -->
              <div class="fn_cs_desc">
                <p>
                  {{ $t('philosophy') }}
                </p>
              </div>
            </div>
            <!-- /#2 tab content -->
          </div>
          <!-- /Tab: Content -->
        </div>
      </div>
    </div>
    <!-- /Tabs Shortcode -->
  </section>
  <!-- /Biography Section -->
</template>
