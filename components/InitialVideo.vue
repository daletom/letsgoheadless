<template>
  <div class="text-center">
      <div class="py-8 px-8 mx-auto bg-gray-100 rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 md:py-4 md:flex md:items-center md:space-y-0 md:space-x-6">
        <ix-img
        class="lg:w-1/2 md:w-1/3 w-full"
        src="1x1_motif.png"
        loading="lazy"
        :imgixParams="{ txt: 'Video Place Holder', ar: '1:1', bg: 'grey', 'txt-align': 'middle,center', 'txt-size': '75', 'txt-fit': 'max'  }"
        sizes="(min-width: 1024px) calc(40vw - 192px), 75vw"
        />
        <div class="text-center space-y-2">
          <div class="space-y-0.5">
            <h1 class="p-4 text-4xl">Why We Should Go Headless</h1>
            <p class="text-xl pb-5">My name is Tom Dale and I created this site. If you want to know more, you can watch the video to learn about:</p>
          <ul class="blog-description text-left inline list-inside text-xl">
            <li>Why I made this site</li>
            <li>Why should I go headless</li>
            <li>Plans for the future of the site</li>
            <li>Where to go next on the site</li>
            </ul> 
            <p class="text-xl pt-5">Would you like to see more videos or learn more about the site? Click below</p>
            <div class="pt-10">
              <nuxt-link to="/videos">
              <button class="bg-tomblue hover:bg-tomorange text-white font-bold py-2 px-4 rounded">
                More Videos
              </button>
              </nuxt-link>
              <nuxt-link to="/about">
              <button class="bg-tomblue hover:bg-tomorange text-white font-bold py-2 px-4 rounded">
                About Page
              </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.blog-description {
list-style-type: circle;
}
</style>
