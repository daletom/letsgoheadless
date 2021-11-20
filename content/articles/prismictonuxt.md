---
title: Prismic to Nuxt.js
description: 'A tutorial for using the Headless CMS Prismic with the front-end framework Nuxt.js.'
img: https://tom.imgix.net/nuxt-ecomm.jpg?auto=format,compress&w=400
alt: nice image
---

Empower your NuxtJS application with `@nuxtjs/content` module: write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

## Installation

If this is your first time setting up Nuxt.js, I would suggest following the initial intructions in the Nuxt.js page: https://www.letsgoheadless.com/frameworks/NuxtJS.

Once it is installed, you will next need to add the `@nuxtjs/prismic` dependecy to your project.

```bash
npm install --save-dev @nuxtjs/prismic
```

You will then need to add @nuxtjs/prismic to the `buildModules` section of your `nuxt.config.js`.

```javascript
{
  buildModules: [
    '@nuxtjs/prismic'
  ],
  prismic: {
    endpoint: 'https://<REPOSITORY>.cdn.prismic.io/api/v2',
    modern: true
  }
}
```

We will replace the `<REPOSITORY>` name in the endpoint later after we make our prismic account.  Then you need to add create a folder called `prismic`, then create a `link-resolver.js` file inside that folder and add this function:

```javascript
export default function(doc) {
  return '/'
}
```


## Integrating Your Prismic Account

You will now need to create a Prismic account if you do not have one.  You can follow the instructions in my Prismic CMS section here: https://www.letsgoheadless.com/cmss/Prismic.

Once you have created your account, it would be great to create some content as well.  At least create one item for your single custom type and one item for your repeatable custom type.  If you would like to copy the exact content I am entering, you can find that here: 

Once you have some content, lets connect Nuxt to that Prismic account.  While you are logged in to Prismic, click the gear at the bottom left.  Then click on `API & Security`, which is in the configuration section.  You should see an API endpoint below several icons to choose your technology.  It should already be selected as Javascript.  Go ahead and grap that url for the api access and enter that in the prismic endpoint we create in your `nuxt.config.js`.  

## Adding Code to View Content

...

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa tincidunt. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Euismod nisi porta lorem mollis aliquam ut. Sit amet mauris commodo quis. Augue lacus viverra vitae congue eu consequat ac felis donec. Arcu non sodales neque sodales ut. Convallis tellus id interdum velit laoreet. Congue nisi vitae suscipit tellus mauris a diam. Sagittis id consectetur purus ut. Aliquam ultrices sagittis orci a scelerisque. Ac orci phasellus egestas tellus rutrum tellus. Sed nisi lacus sed viverra tellus in hac habitasse platea. Metus vulputate eu scelerisque felis.

Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Tincidunt eget nullam non nisi est sit amet facilisis. Faucibus in ornare quam viverra orci sagittis eu volutpat. Sodales ut etiam sit amet. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Tincidunt dui ut ornare lectus sit amet est. Sagittis vitae et leo duis ut diam quam nulla porttitor. Viverra tellus in hac habitasse platea dictumst. Eget egestas purus viverra accumsan in nisl nisi. Scelerisque purus semper eget duis at. Ipsum dolor sit amet consectetur adipiscing elit.

Ultrices mi tempus imperdiet nulla malesuada pellentesque. Id consectetur purus ut faucibus pulvinar elementum integer enim. Ultrices tincidunt arcu non sodales neque sodales. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Magna eget est lorem ipsum dolor. Sed viverra tellus in hac habitasse. Viverra vitae congue eu consequat. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Egestas diam in arcu cursus euismod quis viverra nibh cras. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Habitant morbi tristique senectus et netus et malesuada fames ac. Vel quam elementum pulvinar etiam non quam lacus. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Maecenas pharetra convallis posuere morbi.

Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Ullamcorper a lacus vestibulum sed arcu. Dolor sit amet consectetur adipiscing elit ut aliquam. Velit scelerisque in dictum non consectetur a erat. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Hac habitasse platea dictumst quisque sagittis. Purus non enim praesent elementum facilisis leo vel fringilla. Amet porttitor eget dolor morbi non. Amet nisl purus in mollis nunc sed id. Pharetra vel turpis nunc eget lorem dolor sed viverra. Nunc non blandit massa enim. Curabitur vitae nunc sed velit dignissim.

Id diam maecenas ultricies mi eget. Nibh praesent tristique magna sit amet. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. At imperdiet dui accumsan sit amet. Quis lectus nulla at volutpat diam ut. Dignissim suspendisse in est ante. Quam viverra orci sagittis eu volutpat. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Arcu non sodales neque sodales. Velit scelerisque in dictum non consectetur. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi.

```
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
```

## Displaying content





Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Pellentesque adipiscing commodo elit at imperdiet. Nisl vel pretium lectus quam id leo in vitae. Vitae tempus quam pellentesque nec nam. Elit sed vulputate mi sit amet mauris commodo quis. Turpis massa sed elementum tempus egestas sed sed risus. Eleifend mi in nulla posuere sollicitudin aliquam. In massa tempor nec feugiat nisl pretium fusce id. Gravida dictum fusce ut placerat orci nulla pellentesque. Quis risus sed vulputate odio ut enim blandit. Pulvinar neque laoreet suspendisse interdum. Auctor neque vitae tempus quam pellentesque nec nam aliquam.

Dictum fusce ut placerat orci. Tellus integer feugiat scelerisque varius morbi. Dignissim enim sit amet venenatis urna cursus eget nunc. Consectetur adipiscing elit ut aliquam. Cursus turpis massa tincidunt dui ut ornare lectus. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Felis eget nunc lobortis mattis aliquam faucibus purus in. Nec tincidunt praesent semper feugiat nibh. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Pretium vulputate sapien nec sagittis aliquam malesuada. Leo vel fringilla est ullamcorper eget. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Enim neque volutpat ac tincidunt vitae semper. Aliquam sem et tortor consequat id porta. In ornare quam viverra orci sagittis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Ultricies leo integer malesuada nunc vel risus commodo.

Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Feugiat in ante metus dictum at. Nunc aliquet bibendum enim facilisis gravida neque convallis. Dictum sit amet justo donec enim. Enim tortor at auctor urna nunc id cursus metus. Lorem sed risus ultricies tristique. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Lacinia at quis risus sed vulputate odio ut enim blandit. Quam quisque id diam vel. Scelerisque eu ultrices vitae auctor. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus.