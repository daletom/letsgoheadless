<template>
    <div>
        <h1 class="font-bold text-4xl ml-4 mt-6 mb-6 text-center">Frameworks</h1>
        <ul class="flex flex-wrap m-4">
            <li
            v-for="framework of frameworks"
            :key="framework.slug"
            class="xs:w-full md:w-1/2 sm:w-1/2 lg:w-1/3 px-2 xs:mb-6 md:mb-12 article-card"
            >
                <NuxtLink
                :to="`/frameworks/${framework.slug}`"
                class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md flex-col"
                >
                    <img :src="framework.img" />
                    <div class="p-6 flex flex-col justify-between w-full">
                        <h2 class="font-bold">{{ framework.title }}</h2>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
    const frameworks = await $content('frameworks', params.slug)
      .only(['title', 'img', 'slug'])
      .fetch()
      return { frameworks }
    }
}
</script>