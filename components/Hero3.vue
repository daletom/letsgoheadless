<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="bg-lghblue rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <span class="block">Let's Go Headless</span>
              <span class="block">Tutorial Site</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-indigo-200">
                <ul class="blog-description text-left inline list-inside text-xl">
            <li>Learn to make your own Headless Website</li>
            <li>View +20 simple tutorials replicating the same website</li>
            <li>Tutorials are written and on video</li>
            <li>Use Gatsby, Next.js, & Nuxt.js</li>
            <li>See examples with 7 Headless CMS's</li>
            </ul> 
            </p>
            <a href="/article" class="mt-8 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium bg-tomblue hover:bg-tomorange text-white">Tutorials</a>
            <a href="/cmss" class="mt-8 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium bg-tomblue hover:bg-tomorange text-white">CMSs</a>
            <a href="/frameworks" class="mt-8 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium bg-tomblue hover:bg-tomorange text-white">Frameworks</a>
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <ix-img
            class="transform rounded-md object-contain object-center"
            src="/letsgoheadless_logo_mobile.png"
            alt="App screenshot"
            :imgixParams="{ cs: 'tinysrgb', bg: '262261' }"
            sizes="(min-width: 1280px) 600px, (min-width: 1024px) 480px, (min-width: 768px) 728px, (min-width: 640px) 592px, 90vw"
          />
        </div>
      </div>
    </div>
  </div>
</template>