<template>
  <!-- Contact Section -->
  <section id="contact" class="contact">
    <!-- Main Title -->
    <div class="main_title center">
      <div class="container max880">
        <h3>Contact</h3>
      </div>
    </div>
    <!-- /Main Title -->

    <!-- Contact -->
    <div class="rewall_fn_contact">
      <div class="container max880">
        <!-- Contact Form -->
        <form
          class="contact_form"
          action="/"
          method="post"
          autocomplete="off"
          data-email="frenifyteam@gmail.com"
        >
          <!--
              Don't remove below code in avoid to work contact form properly.
              You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message.
              -->
          <div
            class="success"
            data-success="Your message has been received, we will contact you soon."
          />
          <div class="empty_notice">
            <span>Please Fill Required Fields!</span>
          </div>
          <!-- -->

          <div class="items_wrap">
            <div class="items">
              <div class="item half">
                <div class="input_wrapper">
                  <input id="name" type="text">
                  <span class="moving_placeholder">Name *</span>
                </div>
              </div>
              <div class="item half">
                <div class="input_wrapper">
                  <input id="email" type="email">
                  <span class="moving_placeholder">Email *</span>
                </div>
              </div>
              <div class="item">
                <div class="input_wrapper">
                  <input id="phone" type="phone">
                  <span class="moving_placeholder">Phone</span>
                </div>
              </div>
              <div class="item">
                <div class="input_wrapper">
                  <textarea id="message" />
                  <span class="moving_placeholder">Message</span>
                </div>
              </div>
              <div class="item">
                <a id="send_message" href="#">Send Message</a>
              </div>
            </div>
          </div>
        </form>
        <!-- /Contact Form -->

        <!-- Contact Info -->
        <div class="fn_cs_contact_info">
          <p>Address</p>
          <h3>69 Queen St, London, United Kingdom</h3>
          <p>Phone</p>
          <h3><a href="tel:+7068980751">(+706) 898-0751</a></h3>
          <p>
            <a
              class="fn__link"
              href="mailto:frenifyteam@gmail.com"
            >frenifyteam@gmail.com</a>
          </p>
        </div>
        <!-- /Contact Info -->
      </div>
    </div>
    <!-- /Contact -->
  </section>
  <!-- /Contact Section -->
</template>
