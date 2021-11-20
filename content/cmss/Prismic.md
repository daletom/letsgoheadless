---
title: Prismic
description: 'Empower your Takeshape application with module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
img: 
alt: Prismic logo
---

This is Prismic. It is a **headless cms**.

## Creating a Prismic Account

You will need to go to: https://prismic.io/ to create a new account.  There are free community accounts at Primsic. It includes a lot of unlimited features, the only cap is at 100 GB of built-in CDN.  

<img src="https://tom.imgix.net/prismic_pricing.png?auto=format,compress&w=800" alt="Prismic Pricing">

## Setting Up Your Custom Types

In Prismic you will need to create models to define the content you will be using in your project.  They call these `Custom Types`.  They divide them into 2 categories, `single` and `repeatable`.  For this tutorial, we will make one ef each of these custom types.  Let's start by making a single custom type.  

Our single custom type will be a prominent article at the top of our project.  Kind of like the highlighted or primary article.  Click on the custom types section, click the green create new button, choose single, and give it a name.  I am calling mine `teaser`.  You will now be in a UI where you will drag and drop different models of content.  You will also notice a Slice zone that is toggled off. We aren't going to use that, but, I highly recommend reading more about Slices for future projects: https://prismic.io/docs/core-concepts/slices.  This is a large differentiator of Prismic compared to other Headless CMSs.  It's essentially a way to create dynamic sections for your website/app that later will give a large amount of flexibility and ease for content creators to build and add sections/content to the website.  

For our single type, go ahead and drag over UID, Title, Rich Text, and image.  When you drag them over, it will ask you to give them names for the api calls. I have used uid, title, content, and heroimage.  This is all we will need to create a simple media article for our project.  Please note that if you press the gear next to these different fields, you can modify some items.  For the image field, it will let you add `Responsive Views`.  Don't bother with doing that.  We will create responsive views in the code of our front-end frameworks instead.  It will be much easier to code this using an SDK there.  

Now go back to the custom type section and create one more, but this time a repeatable type.  Drag over all four of the same items and name them all the same as well.  I called this repeatable type `post`.  We will essentially be able to create one article in the teaser, then create multiple articles in the post custom type.  It will just list every post below the teaser.  

## Add Your Content

It is now time to add your content to the site.  You can add anything you want, it will not affect the result of following one of my tutorials since you I am coding using the API names we created for our objects.  So as long as you used the same API names for each object above, the actual content you create will not matter.  

If you would like to do the identical content, it is listed here:

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus molestie nunc non blandit. Nibh tortor id aliquet lectus. Suspendisse in est ante in. Sit amet dictum sit amet justo donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Elit pellentesque habitant morbi tristique. A diam maecenas sed enim ut. A erat nam at lectus. Consectetur a erat nam at lectus urna duis convallis convallis. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Ultrices gravida dictum fusce ut placerat. Sit amet aliquam id diam maecenas ultricies mi eget. Et odio pellentesque diam volutpat commodo sed egestas egestas. Proin sed libero enim sed faucibus turpis in eu. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Sit amet facilisis magna etiam tempor orci eu. Hac habitasse platea dictumst quisque. Tempor id eu nisl nunc mi ipsum faucibus. Ut etiam sit amet nisl purus in mollis.

In vitae turpis massa sed elementum tempus egestas sed sed. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Urna nec tincidunt praesent semper feugiat nibh. Massa sed elementum tempus egestas sed. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Ut sem viverra aliquet eget sit amet tellus. Morbi leo urna molestie at elementum eu. Nam libero justo laoreet sit. Elementum nisi quis eleifend quam. Luctus accumsan tortor posuere ac. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Sit amet luctus venenatis lectus magna. Enim facilisis gravida neque convallis.


```javascript
export default {
  modules: ["@nuxt/content"],
  buildModules: ["@nuxtjs/tailwindcss"]
};

import Vue from 'vue'
import { AgGridVue } from 'ag-grid-vue'

Vue.component('ag-grid-vue', AgGridVue)

meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ]
```

## Fetching content

Learn how to fetch your content with `$content`: https://content.nuxtjs.org/fetching.

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

Learn how to display your Markdown content with the `<nuxt-content>` component directly in your template: https://content.nuxtjs.org/displaying.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Pellentesque adipiscing commodo elit at imperdiet. Nisl vel pretium lectus quam id leo in vitae. Vitae tempus quam pellentesque nec nam. Elit sed vulputate mi sit amet mauris commodo quis. Turpis massa sed elementum tempus egestas sed sed risus. Eleifend mi in nulla posuere sollicitudin aliquam. In massa tempor nec feugiat nisl pretium fusce id. Gravida dictum fusce ut placerat orci nulla pellentesque. Quis risus sed vulputate odio ut enim blandit. Pulvinar neque laoreet suspendisse interdum. Auctor neque vitae tempus quam pellentesque nec nam aliquam.

Dictum fusce ut placerat orci. Tellus integer feugiat scelerisque varius morbi. Dignissim enim sit amet venenatis urna cursus eget nunc. Consectetur adipiscing elit ut aliquam. Cursus turpis massa tincidunt dui ut ornare lectus. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Felis eget nunc lobortis mattis aliquam faucibus purus in. Nec tincidunt praesent semper feugiat nibh. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Pretium vulputate sapien nec sagittis aliquam malesuada. Leo vel fringilla est ullamcorper eget. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Enim neque volutpat ac tincidunt vitae semper. Aliquam sem et tortor consequat id porta. In ornare quam viverra orci sagittis. Pretium aenean pharetra magna ac placerat vestibulum lectus. Ultricies leo integer malesuada nunc vel risus commodo.

Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Feugiat in ante metus dictum at. Nunc aliquet bibendum enim facilisis gravida neque convallis. Dictum sit amet justo donec enim. Enim tortor at auctor urna nunc id cursus metus. Lorem sed risus ultricies tristique. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Lacinia at quis risus sed vulputate odio ut enim blandit. Quam quisque id diam vel. Scelerisque eu ultrices vitae auctor. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus.