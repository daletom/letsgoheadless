<template>
<nav class="z-10 mb-2 transition-colors duration-500 bg-tomblue nav" :class="[page === 'article' ? 'fixed top-0 w-full'  : 'relative']">
  <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <nuxt-link to="/" class="flex items-center text-tomorange hover:text-white">
            <Logo class="block lg:hidden"/>
            <Logo class="hidden lg:block"/>
            <span class="ml-3 text-2xl font-bold font-h1">Let's Go Headless</span>
          </nuxt-link>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex">
            <div class="relative flex ml-0">
              <nuxt-link to="/article/" href="#" class="px-3 py-2 text-2xl font-medium leading-5 transition duration-150 ease-in-out rounded-md font-h2 text-tomorange hover:text-white focus:outline-none group link-style">Tutorials</nuxt-link>
              <!--<nuxt-link to="/cmss/" href="#" class="px-3 py-2 text-2xl font-medium leading-5 transition duration-150 ease-in-out rounded-md font-h2 text-tomorange hover:text-white focus:outline-none group link-style">CMS</nuxt-link>
              <nuxt-link to="/frameworks/" href="#" class="px-3 py-2 text-2xl font-medium leading-5 transition duration-150 ease-in-out rounded-md font-h2 text-tomorange hover:text-white focus:outline-none group link-style">Frameworks</nuxt-link>-->
              <nuxt-link to="/videos/" href="#" class="px-3 py-2 text-2xl font-medium leading-5 transition duration-150 ease-in-out rounded-md font-h2 text-tomorange hover:text-white focus:outline-none group link-style">Videos</nuxt-link>
              <!--<nuxt-link to="/about" href="#" class="px-3 py-2 text-2xl font-medium leading-5 transition duration-150 ease-in-out rounded-md font-h2 text-tomorange hover:text-white focus:outline-none group link-style">About</nuxt-link>-->
            </div>
          </div>
        </div>
      </div>
      <div class="flex -mr-2 sm:hidden">
        <!-- Mobile menu button -->
        <button type="button" @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" aria-label="Main menu" aria-expanded="false">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!showMobileMenu">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="fixed inset-0 z-50 overflow-hidden mobile-menu" v-show="showMobileMenu">
    <button type="button" @click="toggleMobileMenu" class="absolute top-0 right-0 z-50 inline-flex items-center justify-center p-2 m-3 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" aria-label="Main menu" aria-expanded="false">
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div class="absolute inset-0 w-screen h-screen opacity-75 bg-darkteal">

    </div>
    <div class="block">
      <nav class="">
        <div class="ml-12">
          <nuxt-link @click.native="showMobileMenu = false" to="/" class="block px-3 py-2 mt-1 text-2xl text-gray-300 transition duration-150 ease-in-out rounded-md font-h2 focus:outline-none">Home</nuxt-link>
          <nuxt-link @click.native="showMobileMenu = false" to="/article/" class="block px-3 py-2 mt-1 text-2xl text-gray-300 transition duration-150 ease-in-out rounded-md font-h2 focus:outline-none">Tutorials</nuxt-link>
          <nuxt-link @click.native="showMobileMenu = false" to="/cms/" class="block px-3 py-2 mt-1 text-2xl text-gray-300 transition duration-150 ease-in-out rounded-md font-h2 focus:outline-none">CMS</nuxt-link>
          <nuxt-link @click.native="showMobileMenu = false" to="/frameworks/" class="block px-3 py-2 mt-1 text-2xl text-gray-300 transition duration-150 ease-in-out rounded-md font-h2 focus:outline-none">Frameworks</nuxt-link>
          <nuxt-link @click.native="showMobileMenu = false" to="/videos/" class="block px-3 py-2 mt-1 text-2xl text-gray-300 transition duration-150 ease-in-out rounded-md font-h2 focus:outline-none">Videos</nuxt-link> 
          <nuxt-link @click.native="showMobileMenu = false" to="/about/" class="block px-3 py-2 mt-1 text-2xl text-gray-300 transition duration-150 ease-in-out rounded-md font-h2 focus:outline-none">About</nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</nav>

</template>

<script>
export default {
  props: ['page'],
  mounted() {
    this.showNavControls = true;
  },
  data() {
    return {
      showMobileMenu: false,
      showNavControls: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
}
}
</script>

<style>
.mobile-menu {
  backdrop-filter: blur(3px);
}
.mobile-menu nav {
  position: absolute;
  left: 0px;
  bottom: 100px;
  width: 75%;
  height: 75%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
</style>