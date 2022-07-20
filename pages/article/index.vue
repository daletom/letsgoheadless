<template>
    <div>
        <h1 class="mt-6 mb-6 ml-4 text-4xl font-bold text-center">Tutorials</h1>
        <ul class="flex flex-wrap m-4">
            <li
            v-for="article of articles"
            :key="article.slug"
            class="px-2 xs:w-full md:w-1/2 sm:w-1/2 lg:w-1/3 xs:mb-6 md:mb-12 article-card"
            >
                <NuxtLink
                :to="`/article/${article.slug}`"
                class="flex flex-col transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md"
                >
                    <ix-img
                      :src="article.img"
                      :alt="article.alt"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    />
                    <div class="flex flex-col justify-between w-full p-6">
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