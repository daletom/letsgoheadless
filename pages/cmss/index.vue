<template>
    <div>
        <h1 class="mt-6 mb-6 ml-4 text-4xl font-bold text-center">Content Management Solutions</h1>
        <ul class="flex flex-wrap m-4">
            <li
            v-for="cms of cmss"
            :key="cms.slug"
            class="px-2 xs:w-full md:w-1/2 sm:w-1/2 lg:w-1/3 xs:mb-6 md:mb-12 article-card"
            >
                <NuxtLink
                :to="`/cmss/${cms.slug}`"
                class="flex flex-col transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md"
                >
                    
                    <div class="flex flex-col justify-between w-full p-6">
                        <h2 class="font-bold">{{ cms.title }}</h2>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
    const cmss = await $content('cmss', params.slug)
      .only(['title', 'img', 'slug'])
      .fetch()
      return { cmss }
    }
}
</script>