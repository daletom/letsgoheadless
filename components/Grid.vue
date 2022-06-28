<template>
  <div class="flex h-full justify-center pt-5">
      <no-ssr>

    <ag-grid-vue style="width: 1000px; height: 500px;"
                 class="ag-theme-alpine"
                 :columnDefs="columnDefs"
                 :rowData="rowData">
    </ag-grid-vue>
</no-ssr>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      columnDefs: null,
      rowData: null
    };
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: "Headless CMS", field: "cms", sortable: "true", filter: "true" },
      { headerName: "Front End", field: "frontend", cellRenderer: function(params) { return '<a href="/frameworks/'+ params.value+ '" target="_self">'+ params.value+'</a>' } },
      { headerName: "Desktop Pagespeed", field: "desktop", sortable: "true", filter: "true" },
      { headerName: "Mobile Pagespeed", field: "mobile", sortable: "true", filter: "true" },
      { headerName: "Site Link", field: "link", cellRenderer: function(params) { return '<a href="https://'+ params.value+ '.letsgoheadless.com" target="_blank">'+ params.value+'</a>' } }
    ];

    this.rowData = [
      { cms: "Headless Wordpress", frontend: "Gatsby", mobile: 77, desktop: 94, link: "wptogatsby" },
      { cms: "Contentful", frontend: "Gatsby", mobile: 63, desktop: 89, link: "contentfultogatsby" },
      { cms: "Dato CMS", frontend: "Gatsby", mobile: 57, desktop: 84, link: "datocmstogatsby" },
      { cms: "API Rocket", frontend: "Gatsby", mobile: 65, desktop: 97, link: "apirockettogatsby" },
      { cms: "Takeshape", frontend: "Gatsby", mobile: 69, desktop: 95, link: "takeshapetogatsby" },
      { cms: "Prismic", frontend: "Gatsby", mobile: 0, desktop: 0, link: "" },
      { cms: "Dato CMS", frontend: "NextJS", mobile: 86, desktop: 99, link: "datocmstonextjs" },
      { cms: "Dato CMS", frontend: "NuxtJS", mobile: 97, desktop: 99, link: "datotonuxt" },
      { cms: "Takeshape", frontend: "NuxtJS", mobile: 78, desktop: 89, link: "takeshapetonuxt" },
      { cms: "Prismic", frontend: "NuxtJS", mobile: 86, desktop: 91, link: "prismictonuxt" },
      { cms: "Cosmic", frontend: "NuxtJS", mobile: 97, desktop: 100, link: "cosmictonuxt" }
    ];
  }
};
</script>