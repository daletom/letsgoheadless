<template>
    <div>
        <h1 class="font-bold text-4xl ml-4 mt-6 mb-6 text-center">Tutorials</h1>
        <ul class="flex flex-wrap m-4">
            <li
            v-for="article of articles"
            :key="article.slug"
            class="xs:w-full md:w-1/2 sm:w-1/2 lg:w-1/3 px-2 xs:mb-6 md:mb-12 article-card"
            >
                <NuxtLink
                :to="`/article/${article.slug}`"
                class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md flex-col"
                >
                    <img :src="article.img" :alt="article.alt" />
                    <div class="p-6 flex flex-col justify-between w-full">
                        <h2 class="font-bold">{{ article.title }}</h2>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .fetch()
      return { articles }
    }
}
</script>