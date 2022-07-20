<template>
    <div class="page-wrapper">
      <div v-for="video of videos" :key="video.slug">
        <Youtube class="m-4 transition-shadow duration-150 ease-in-out bg-gray-100 shadow-sm hover:shadow-md" :item="video" />
      </div>
    </div>
</template>

<script>

export default {
    async asyncData({ $content}) {
        const videos = await $content('ytvideos')
        .fetch()

        return {
            videos
        }
    },
}

</script>
