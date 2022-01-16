---
title: Cosmic to Nuxt.js
description: 'A tutorial for using Cosmic, a headless CMS, with the front-end framework Nuxt.js.'
img: /cosmictonuxt_tutorial.png
alt: Cosmic to Nuxt Tutorial image
---

Welcome to a tutorial using Cosmic as a headless CMS with Nuxt.js as a front-end framework.  I will take you through to steps of starting a Nuxt.js app from start to finish.  We will also be creating a new Cosmic account as well.  The tutorial will also be utilizing Tailwind CSS as the UI framework, the Nuxt Image module to generate a responsive design with imgix images from Cosmic, and deploying with Vercel.<br>

<iframe
                class="youtube"
                src="https://www.youtube.com/embed/fZILQC1jItE?mute=0&autoplay=0&modestbranding=1&loop=1&rel=0&amp;controls=1&amp;showinfo=0&playlist=fZILQC1jItE"
                frameborder="0"
                allowfullscreen
              ></iframe>
              
<br> Here is a link to the live site: https://cosmictonuxt.letsgoheadless.com/ .

You can also see the github link here: https://github.com/daletom/cosmictonuxt .  

## Installation

Run the following command to start a nuxt project:

```bash 
npm init nuxt-app "projectname"
```

You will see a list of items to fill out in your terminal to create your project. I am using Javascript, choose your package manager, Tailwind CSS as my UI framework, I do not need any of these additional modules, choose the LINTER of your choice, no testing framework, a Universal rendering mode, Static hosting, I chose a jsconfig.json since I am using the VS Code editor, then your github info. The Universal rendering mode and Static hosting are important to do, the rest you can change or modify as you wish.

If you need more info about installing Nuxt, I would suggest following the initial intructions in the Nuxt.js page of this website: https://www.letsgoheadless.com/frameworks/NuxtJS.

Once it is installed, you will next need to add the `@nuxtjs/apollo` dependecy to your project.

```bash
npm install --save-dev @nuxtjs/apollo
```

You will then need to add @nuxtjs/apollo to the `modules` section of your `nuxt.config.js`. Then you need to create a apollo section, this is where you will identify the graphQl endpoint for Cosmic.  They are always the same, so you can use the one I have listed.

```javascript
{
  modules: [
    '@nuxtjs/apollo'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `https://graphql.cosmicjs.com/v3`,
      }
    }
}
```


## Creating Your Cosmic Account

You will now need to create a Cosmic account if you do not have one.  Once you have created it, you will need to make a multiple object type.  Our multiple object type will be a list of posts. I will call this one `post`.

You will only need to add an image metafield to the content model. By default, there are already uid, title, and content sections which we will use.  If you have never made a Cosmic account before, you can get more detailed instructions in my Cosmic CMS section here: https://www.letsgoheadless.com/cmss/cosmic .

Once you have created your account, it would be great to create some content as well.  At least create one item for your multiple object type.  If you would like to copy the exact content I am entering, you can find that here: https://www.letsgoheadless.com/example .  

## Adding Code to View Basic Scaffolding

It's time to open up your favorite code editor for the Nuxt project you created. Go to the `index.vue` file in your pages folder and you should see a `<Tutorial>` component. You can leave that, but we will be modifying the `tutorial.vue` file which is the content.

Go to the `tutorial.vue` file in the pages folder.  Let's replace the code with this:

```javascript
<template>
  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Hello World
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
           This is my demo, using Cosmic as a headless CMS and Nuxt.js as a frontend. Apollo graphQl is used to connect the API from Cosmic to Nuxt.  It is deployed using Vercel. 
        </p>
      </div>
      <div class="mt-12 max-w-lg max-w-md mx-auto grid gap-5 lg:grid-cols-3 md:grid-cols-2 lg:max-w-none md:max-w-none">
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-1">
            <img class="h-48 w-full object-cover" src="https://tom.imgix.net/1x1_motif.png?ixlib=vue-2.9.0&auto=format%2Ccompress&txt=Place%20Holder&ar=1%3A1&bg=grey&txt-align=middle%2Ccenter&txt-size=75&txt-fit=max&w=380" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
                <p class="text-xl font-semibold text-gray-900">
                  Example Title
                </p>
                <p class="mt-3 text-base text-gray-500">
                Example Post
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
```

You're not using any of the Cosmic APIs yet, I'm just building the scaffolding first.  So if you go to your terminal and type `npm run dev` or the similar yarn command, you should be able to go to `localhost:3000` and see a placeholder image with text. If you're not familiar with Tailwind CSS, I am using Tailwind for the design.  In the `class` sections of each element, I am using short words from Tailwind to create the design.  The article should appear to be on a floating card with a shadow. It will have a margin until the browser is smaller than 1024 pixels.  The text on the post will shift from being on the right to below the image once the browser goes smaller than 640 pixels.

## Setting up GraphQl with Apollo

We will be using the `@nuxtjs/apollo` module to connect to Cosmic's API with GraphQl.  Let's create a new folder for our Nuxt app called `apollo`.  Then inside of that folder, another folder called `queries`.  We will need a query for the posts we have.  Create a posts.gql file in that queries folder.  Inside the posts.gql, we will build out our graphQl queries.  It will look like this:

```javascript
{
  getObjects(
    bucket_slug: "lgh-nuxtjs-cosmicjs-production",
    read_key: "YdHz2vhutnI9kISsVYFMleEAM6J1IRaxbDISBByhDAbpnDXAu1",
    input: {
    limit: 20,
    query: {
      type: "posts"
    }
  }) {
    objects {
      title
      content
      metadata
      slug
      id
    }
  }
}
```
Don't worry about the read_key being visible, it's not a concern to publicly be seen. That's why it is not obscured or added to a .env file.

In order to see how I got this graphQl query, just click on one of your Cosmic Buckets, then next to the name of it, you will see Developer Tools. The reason I am choosing to use the GraphQL is to ensure that I don't get large payloads by accessing all of the content of my Cosmic site on each page load. The GraphQL allows me to get pretty specific and only ask for certain content. In my example query above, I'm only asking for the id, content, title, slug, and metadata of the items in the posts section. The metadata is the image item we added.

## Setting up the posts

Next let's remove the placeholder info and connect to Cosmic via Apollo.  To connect, we will be importing our gql files in our `index.vue` file.  It will look like this:

```javascript
<script>
import getObjects from '../apollo/queries/allHomes.gql'
export default {
  apollo: {
    getObjects: {
      prefetch: true,
      query: getObjects
    }
  },
};
</script>
```

You can also modify the template area, to bind the data correctly to our Tutorial component. Like this: 

```javascript
<Tutorial v-bind:data="getObjects.objects" />
```

Now to replace the placeholder info.  Go to the `<Tutorial.vue` component.  In your script section, you will need to add data to the props section. Like this: 

```javascript
<script>
export default {
  props: ['data']
}
</script>
```

On line 16, you will need to add a `v-for` to loop each post and display a new article.  The div will now look like this: 

```javascript
<div v-for="post in data" :key="post.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
```

Next, replace the entire `<img>` section with this:

```javascript
<img class="h-48 w-full object-cover" :src="post.metadata.heroimage.imgix_url" alt="" />
```

In the p section, with your Example Title placeholder, replace it with this:

```javascript
{{post.title}}
```

Then delete the `Example Post` that is in the `<p>` section. You will modify this section with a `v-html` since Cosmic is passing html via their API.  It will look like this: 

```javascript
<p class="mt-3 text-base text-gray-500" v-html="post.content">
                </p> 
```

Now refresh your browser on your localhost:3000 and let's see the changes take effect.  It should have all of your content now!

## Optimizing your post images

So all Cosmic accounts use an image service called imgix to optimize their images.  It's a really powerful item to offer for free with all Cosmic accounts which is great. You can simply add corresponding imgix APIs to the end of the Cosmic urls in order to optimize the images further.  For example, you could change the image url this way to resize the width to 600: 

```javascript
<img
  :src="post.metadata.heroimage.imgix_url + '&w=400'"
/>
```

Since we are using Nuxt, there are several great options to get easy access to responsive design with imgix.  

One way to do this would be to use the Nuxt Image module.  First, install Nuxt image:

```bash
npm install -D @nuxt/image
```

Then go into your `nuxt.config.js` file and add `@nuxt/image` to the buildModules section.  Now below that, add a new section called image and add imgix.  It will look like this: 

```javascript
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  image: {
    imgix: {
        baseURL: ''
    }
  },
```

You can now go back to your index.vue file and update the `<img>` tag to a `<nuxt-img>` tag.  In the nuxt-img tag, you declare a provider to be imgix (or whatever service you choose).  You will need to add a sizes element, which will not only declare which size image to use at each size but will also create responsive breakpoints in a srcset.  Then if you have any additional APIs you want to use for your images, you can add them as `:modifers`.  In this example, I am choosing to crop images at a 1.8 to 1 aspect ratio. When I crop, I want it to crop intelligently to a face, if there is no face, then the prominent edges of the image.  I will also want to add some automatic compression as well.  You can read more about the different image solutions you can do with Nuxt on this website here: https://www.letsgoheadless.com/frameworks/NuxtJS.  The final nuxt-img tag is looking like this: 

```javascript
<nuxt-img
  provider="imgix"
  class="h-48 w-full object-cover"
  sizes="xl:413px, lg:50vw, md:448px, sm:900px, xs:90vw)"
  :src="post.metadata.heroimage.imgix_url"
  fit="crop"
  :modifiers="{ auto: 'compress', crop: 'faces,entropy', ar: '2.3:1'}"
        />
```

This is generating a responsive design, using the right size image at each size of the browser. You will notice I have also added some sizes here, this is what generates different srcset versions to correctly size the image to match the css. It's key to add the sizes.

## Deploying the Site

At this point, I think we have done a pretty good job adding our posts.  There's certainly a ton of other great stuff we could keep doing.  Like adding a navbar, footer, or creating dynamic pages for each article.  I wanted to focus more on getting you started quickly with Cosmic and Nuxt to get easily to a point where you feel more comfortable with the api and displaying the content using Nuxt.  

Next we will want to deploy this website.  I am going to choose to use Vercel for this. To make the deployment on Vercel smooth, I am going to use their nuxtjs/vercel-builder.  So let's create a `vercel.json` file in your project.  Then add this to it: 

```javascript
{
    "builds": [
        {
        "src": "nuxt.config.js",
        "use": "@nuxtjs/vercel-builder",
        "config": {}
        }
    ]
}
```

Now you can add your code to your Github repo and then login to Vercel.com.  Click on `New Project`. If you have the Vercel for Github, then you should already see your new Github repo that you created. If you don't, you can setup that integration here: https://vercel.com/docs/concepts/git/vercel-for-github.  Click on your repo, no need to change any of the default settings on Vercel, and press deploy.  After about 90 seconds, it should be deployed!
