<template>
  <div class="flex flex-rounded-lg shadow-lg overflow-hidden pb-4">
    <div class="w-full lg:flex">
      <div class="video aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <iframe
                class="modest-vid-embed__item w-full h-full"
                src="https://www.youtube.com/embed/8M16E8fNSE4?mute=0&autoplay=0&modestbranding=1&loop=1&rel=0&amp;controls=1&amp;showinfo=0&playlist=8M16E8fNSE4"
                frameborder="0"
                allowfullscreen
              >
              </iframe>
            </div>
      <div class="flex-1 p-4">
        <h2 class="text-primary mt-2 text-xl leading-7 font-semibold inline">
          What is Headless?
        </h2>
        <p class="mt-3 text-lg leading-6 text-gray-500  dark:text-gray-300">
          My name is Tom Dale and I created this site. If you want to know more, you can watch the video to learn about:
        </p>
        <ul class="blog-description text-left inline list-inside text-xl">
          <li>Why I made this site</li>
          <li>Why should I go headless</li>
          <li>Plans for the future of the site</li>
          <li>Where to go next on the site</li>
        </ul> 
        <p class="text-xl pt-5">Would you like to see more videos or learn more about the site? Click below</p>
            <div class="pt-10">
              <nuxt-link to="/videos">
              <button class="mt-8 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium bg-tomblue hover:bg-tomorange text-white">
                More Videos
              </button>
              </nuxt-link>
              <nuxt-link to="/about">
              <button class="mt-8 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium bg-tomblue hover:bg-tomorange text-white">
                About Page
              </button>
              </nuxt-link>
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

.video {
  width: 800px;
  height: 400px;
}

.youtube {
  background-color: #000;
  position: relative;
  display: block;
  contain: content;
  background-position: 50%;
  background-size: cover;
  cursor: pointer;
  max-width: 720px;
  width: 600px;
  height: 300px;
}

.lyt-visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

</style>
