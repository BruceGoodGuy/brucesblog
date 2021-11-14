<template>
  <div class="rewall_fn_wrapper_all" data-nav-skin="transdark">
    <!-- Wrapper -->
    <div class="rewall_fn_wrapper">
      <Header />
      <!-- Main Content -->
      <div class="rewall_fn_content">
        <div class="fn__page">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'main',
  data () {
    return {
      title: "Bruce's Blog"
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'Content-Type',
          content: 'text/html; charset=utf-8'
        },
        {
          name: 'description',
          content: "Bruce's Blog"
        },
        {
          name: 'author',
          content: 'Bruce'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1'
        }
      ]
    }
  }
}
</script>
