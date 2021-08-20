<template>
  <div class="py-8 px-8 mx-auto bg-tomblue rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 md:py-4 md:flex md:items-center md:space-y-0 md:space-x-6">
        <ix-img
        class="lg:w-1/3 md:w-1/3 w-full"
        src="1x1_motif.png"
        loading="lazy"
        :imgixParams="{ txt: 'Place Holder', ar: '1:1', bg: 'grey', 'txt-align': 'middle,center', 'txt-size': '75', 'txt-fit': 'max'  }"
        sizes="(min-width: 1024px) calc(33vw - 192px), 75vw"
        />
        <ix-img
        class="lg:w-1/3 md:w-1/3 w-0"
        src="1x1_motif.png"
        loading="lazy"
        :imgixParams="{ txt: 'Place Holder', ar: '1:1', bg: 'grey', 'txt-align': 'middle,center', 'txt-size': '75', 'txt-fit': 'max'  }"
        sizes="(min-width: 1024px) calc(33vw - 192px), 75vw"
        />
        <ix-img
        class="lg:w-1/3 md:w-1/3 w-full"
        src="1x1_motif.png"
        loading="lazy"
        :imgixParams="{ txt: 'Place Holder', ar: '1:1', bg: 'grey', 'txt-align': 'middle,center', 'txt-size': '75', 'txt-fit': 'max'  }"
        sizes="(min-width: 1024px) calc(33vw - 192px), 75vw"
        />
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
