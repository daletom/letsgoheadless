<template>
  <div class="py-8 px-8 mx-auto bg-tomblue rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 md:py-4 md:flex md:items-center md:space-y-0 md:space-x-6">
        <ix-img
        class="lg:w-1/3 md:w-1/3 w-full"
        src="lgh_robot_army.png"
        loading="lazy"
        :imgixParams="{ fit: 'fill', ar: '1.7:1', bg: 'white' }"
        sizes="(min-width: 1024px) calc(33vw - 192px), 75vw"
        />
        <ix-img
        class="lg:w-1/3 md:w-1/3 w-full"
        src="lgh_robot_visual.png"
        loading="lazy"
        :imgixParams="{ fit: 'fill', ar: '1.7:1', bg: 'white' }"
        sizes="(min-width: 1024px) calc(33vw - 192px), 75vw"
        />
        <video
          autoplay loop muted playsinline
          class="lg:w-1/3 md:w-1/3 w-full">
          <source
            src="https://tom.imgix.net/removerobothead.mp4"
            type="video/mp4">
        </video>
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
