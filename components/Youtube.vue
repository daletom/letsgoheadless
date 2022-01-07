<template>
    <div class="flex flex-rounded-lg shadow-lg overflow-hidden pb-4">
        <div class="w-full lg:flex">
            <div class="video aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <iframe
                class="modest-vid-embed__item w-full h-full"
                :src="'https://www.youtube.com/embed/'+ item.video + `?mute=0&autoplay=0&modestbranding=1&loop=1&rel=0&amp;controls=1&amp;showinfo=0&playlist=` + item.video"
                frameborder="0"
                allowfullscreen
              >
              </iframe>
            </div>
            <div class="flex-1 p-4">
                <div>
                    <span
                        v-for="tag in item.tags"
                        :key="tag"
                        class="inline-flex items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium leading-5 bg-tomorange text-tomblue"
                    >
                    {{tag}}
                    </span>
                </div>
                <h2 class="text-primary mt-2 text-xl leading-7 font-semibold inline">
                    {{ item.title }}
                </h2>
                <p class="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-300">
                    {{ item.description}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
}
</script>

<style>
.video {
  width: 600px;
  height: 300px;
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

.lty-playbtn {
  width: 68px;
  height: 48px;
  position: absolute;
  cursor: pointer;
  transform: translate3d(-50%,-50%,0);
  top: 50%;
  left: 50%;
  z-index: 1;
  background-color: transparent;
  background-image: url(https://tom.imgix.net/youtubeicon.svg);
  transition: filter .1s cubic-bezier(0,0,.2,1);
  border: none;
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