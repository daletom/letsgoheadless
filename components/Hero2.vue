<template>
  <div class="text-center">
      <div class="py-8 px-8 mx-auto bg-gray-100 rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 md:py-4 md:flex md:items-center md:space-y-0 md:space-x-6">
        <ix-img
        class="lg:w-1/2 md:w-1/3 w-full"
        src="letsgoheadless_logo_mobile.png"
        loading="lazy"
        :imgixParams="{ fit: 'crop', ar: '1.8:1', bg: '262261' }"
        sizes="(min-width: 1024px) calc(60vw - 192px), 75vw"
        />
        <div class="text-center space-y-2">
          <div class="space-y-0.5">
            <h1 class="p-4 text-4xl">Let's Go Headless Tutorial Site</h1>
            <p class="text-xl pb-5">This is a informational and tutorial website about Headless Web Architecture.</p>
          <ul class="blog-description text-left inline list-inside text-xl">
            <li>Learn to make your own Headless Website</li>
            <li>View +20 simple tutorials replicating the same website</li>
            <li>Tutorials are written and on video</li>
            <li>Use Gatsby, Next.js, & Nuxt.js</li>
            <li>See examples with 7 Headless CMS's</li>
            </ul> 
            <div class="pt-10">
              <nuxt-link to="/article">
              <button class="bg-tomblue hover:bg-tomorange text-white font-bold py-2 px-4 rounded">
                See Tutorials
              </button>
              </nuxt-link>
              <nuxt-link to="/cmss">
              <button class="bg-tomblue hover:bg-tomorange text-white font-bold py-2 px-4 rounded">
                About CMSs
              </button>
              </nuxt-link>
              <nuxt-link to="/frameworks">
              <button class="bg-tomblue hover:bg-tomorange text-white font-bold py-2 px-4 rounded">
                Frameworks
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
