<template>
    <div class="p-4 bg-gray-50 grid grid-cols-3 gap-4">
    <div class="prose lg:prose-xl col-span-2">
      <nuxt-content ref="nuxtContent" :document="framework" class="prose" />
    </div>
    <aside ref="toc" class="col-span-1 lg:flex lg:flex-col">
      <div class="sticky top-16">
        <h2
          class="uppercase text-black font-h2 text-lg lg:mt-16 tracking-wider"
        >
          Table of contents
        </h2>
        <nav class="mt-4">
          <ul>
            <li
              @click="tableOfContentsHeadingClick(link)"
              :class="{
                'pl-4': link.depth === 3
              }"
              class="toc-list"
              v-for="link of framework.toc"
              :key="link.id"
            >
              <a
                :class="{
                  'text-red-500 hover:text-red-600':
                    link.id === currentlyActiveToc,
                  'text-black hover:gray-900': link.id !== currentlyActiveToc
                }"
                role="button"
                class="transition-colors duration-75 text-base mb-2 block"
                :href="`#${link.id}`"
                >{{ link.text }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const framework = await $content('frameworks', params.slug).fetch();
    return { framework }
    },
    data() {
    return {
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0
      }
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document
      .querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]")
      .forEach(section => {
        this.observer.observe(section);
      });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
methods: {
  tableOfContentsHeadingClick(link) {
    this.currentlyActiveToc = link.id;
  },
}
    
}
</script>

<style>
.article-toc {
    scroll-behavior: smooth;
}

</style>