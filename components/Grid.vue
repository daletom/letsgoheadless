<template>
  <div class="flex h-full">
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
      { headerName: "Front End", field: "frontend", sortable: "true", filter: "true" },
      { headerName: "Desktop Pagespeed", field: "desktop", sortable: "true", filter: "true" },
      { headerName: "Mobile Pagespeed", field: "mobile", sortable: "true", filter: "true" },
      { headerName: "Link", field: "link", cellRenderer: function(params) { return '<a href="https://'+ params.value+ '.letsgoheadless.com" target="_blank">'+ params.value+'</a>' } }
    ];

    this.rowData = [
      { cms: "Headless Wordpress", frontend: "Gatsby", desktop: 61, mobile: 87, link: "wptogatsby" },
      { cms: "Contentful", frontend: "Gatsby", desktop: 63, mobile: 89, link: "contentfultogatsby" },
      { cms: "Dato CMS", frontend: "Gatsby", desktop: 57, mobile: 84, link: "datocmstogatsby" },
      { cms: "Prismic", frontend: "Gatsby", desktop: 0, mobile: 0, link: "" },
      { cms: "Dato CMS", frontend: "Next JS", desktop: 86, mobile: 99, link: "datocmstonextjs" }
    ];
  }
};
</script>