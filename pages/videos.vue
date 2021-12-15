<template>
    <div class="page-wrapper">
      <h3>What is this site? It's currently in process, but it's essentially a site to look at several options for connecting a headless CMS to a jamstack front-end.  To be launched January 2022...</h3>
      <div v-for="video of videos" :key="video.slug">
        <Youtube class="m-4 transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md bg-gray-100" :item="video" />
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
