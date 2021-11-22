<template>
    <div class="page-wrapper">
      <div v-for="video of videos" :key="video.slug">
        <Youtube :item="video" />
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
