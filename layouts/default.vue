<script>
import TheHeader from '@/components/navigation/TheHeader.vue'
import TheSidenav from '@/components/navigation/TheSidenav.vue'
export default {
  name: 'The-Header',
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
  components: {
    TheHeader,
    TheSidenav,
  },
}
</script>
<template>
  <div>
    <TheHeader @sidenavToggle="toggleSideNav" />
    <TheSidenav :show="showSideNav" @close="toggleSideNav" />
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}
body {
  margin: 0;
}
</style>
