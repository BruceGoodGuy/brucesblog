<template>
  <!-- About Section -->
  <section id="about" class="about">
    <!-- About Modern Shortcode -->
    <div class="fn_cs_about_modern">
      <div class="container">
        <div class="row">
          <div class="left_part">
            <div id="scene" class="left_in">
              <div class="layer border" data-depth="0.2">
                <span class="span1" />
                <span class="span2" />
                <img src="img/thumb/450-550.jpg" alt="">
              </div>
              <div class="img_holder layer" data-depth="0.3">
                <img src="img/thumb/450-550.jpg" alt="">
                <div class="abs_img" data-bg-img="img/about.jpg" />
              </div>
              <div
                class="dots layer"
                data-switch="disable"
                data-depth="0.4"
              />
            </div>
          </div>

          <div class="right_part">
            <!-- Main Title -->
            <div class="main_title">
              <h3>{{ $t("web_developer") }}</h3>
              <p>
                {{ $t("intro") }}
              </p>
              <img src="img/signature.png" alt="">
            </div>
            <!-- /Main Title -->
          </div>
        </div>
      </div>
    </div>
    <!-- About Modern Shortcode -->
  </section>
  <!-- /About Section -->
</template>
