<script>
export default {
  name: 'The-Header',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showSideNav: false,
    }
  },
  methods: {
    toggleSideNav() {
      this.showSideNav = !this.showSideNav
    },
  },
}
</script>
<template>
  <div>
    <div class="container">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred {{ error }}</h1>
    </div>
    <h1><a href="/">Go Back </a></h1>
  </div>
</template>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}
body {
  margin: 0;
}
.container,
h1 a {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 a {
  color: red;
}
</style>
