---
title: Prismic to Nuxt.js
description: 'A tutorial for using the Headless CMS Prismic with the front-end framework Nuxt.js.'
img: https://tom.imgix.net/prismictonuxt_tutorial.png?auto=format,compress&w=400
alt: Prismic to Nuxt Tutorial
---

Welcome to a tutorial using Prismic as a headless CMS with Nuxt.js as a front-end framework.  I will take you through to steps of starting a Nuxt.js app from start to finish.  We will also be creating a new Prismic account as well.  The tutorial will also be utilizing Tailwind CSS as the UI framework, the Nuxt Image module to generate a responsive design with imgix images from Prismic, and deploying with Vercel.<br>

<iframe
                class="youtube"
                src="https://www.youtube.com/embed/oLbsqXT1jcQ?mute=0&autoplay=0&modestbranding=1&loop=1&rel=0&amp;controls=1&amp;showinfo=0&playlist=oLbsqXT1jcQ"
                frameborder="0"
                allowfullscreen
              ></iframe> <br> Here is a link to the live site: https://prismictonuxt.letsgoheadless.com/.

You can also see the github link here: https://github.com/daletom/prismiccmstonuxt .  

## Installation

Run the following command to start a nuxt project:

```bash 
npm init nuxt-app "projectname"
```

You will see a list of items to fill out in your terminal to create your project. I am using Javascript, choose your package manager, Tailwind CSS as my UI framework, I do not need any of these additional modules, choose the LINTER of your choice, no testing framework, a Universal rendering mode, Static hosting, I choose a jsconfig.json since I am using the VS Code editor, then your github info. The Universal rendering mode and Static hosting are important to do, the rest you can change or modify as you wish.

If you need more info about installing Nuxt, I would suggest following the initial intructions in the Nuxt.js page of this website: https://www.letsgoheadless.com/frameworks/NuxtJS.

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

You will now need to create a Prismic account if you do not have one.  Once you have created it, you will need to make two different Custom Types, a single and a repeatable custom type.  Our single custom type will be a prominent article at the top of our project. I will call this one `teaser`. Our repeatable custom type will be a list of posts to go below our prominent article at the top. I will call this one `post`.

For both custom types, you will be adding the same items.  You will need to choose UID, Title, Rich Text, and image. When you drag them over in the Prismic UI, it will ask you to give them names for the api calls. I have used uid, title, content, and heroimage.  If you have never made a Prismic account before, you can get more detailed instructions in my Prismic CMS section here: https://www.letsgoheadless.com/cmss/Prismic.

Once you have created your account, it would be great to create some content as well.  At least create one item for your single custom type and one item for your repeatable custom type.  If you would like to copy the exact content I am entering, you can find that here: 

Once you have some content, lets connect Nuxt to that Prismic account.  While you are logged in to Prismic, click the gear at the bottom left.  Then click on `API & Security`, which is in the configuration section.  You should see an API endpoint below several icons to choose your technology.  It should already be selected as Javascript.  Go ahead and grap that url for the api access and enter that in the prismic endpoint we create in your `nuxt.config.js`.  

## Adding Code to View Basic Scaffolding

It's time to open up your favorite code editor for the Nuxt project you created. Go to the `index.vue` file in your pages folder and remove the `<Tutorial>` component. You can also deleted the `Tutorial.vue` file in the components folder as well.

Now go back to your `index.vue` file in the pages folder.  Let's add the code to show your teaser post:

```javascript
<template>
  <div class="lg:pl-24 lg:pr-24 pt-4">
    <div class="text-center bg-white rounded-xl shadow-md">
      <h1 class="blog-title">
        Hello World
      </h1>
      <div class="py-8 px-8 mx-auto space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 md:py-4 md:flex md:items-center md:space-y-0 md:space-x-6">
        <img
          src="https://tom.imgix.net/1x1_motif.png?ixlib=vue-2.9.0&auto=format%2Ccompress&txt=Place%20Holder&ar=1%3A1&bg=grey&txt-align=middle%2Ccenter&txt-size=75&txt-fit=max&w=380"
        />
        <div class="text-center space-y-2">
          <div class="space-y-0.5">
          <p class="blog-description inline">This is my blog post.</p> 
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

You're not using any of the Prismic APIs yet, I'm just building the scaffolding first.  So if you go to your terminal and type `npm run dev` or the similar yarn command, you should be able to go to `localhost:3000` and see a placeholder image with text. If you're not familiar with Tailwind CSS, I am using Tailwind for the design.  In the `class` sections of each element, I am using short words from Tailwind to create the design.  The article should appear to be on a floating card with a shadow. It will have a margin until the browser is smaller than 1024 pixels.  The text on the post will shift from being on the right to below the image once the browser goes smaller than 640 pixels.

## Connecting Prismic API for teaser post

Next let's remove the placeholder info and connect to the Prismic API. We will be using the `@nuxtjs/prismic` module to to do this.  I am going to be using an async request to set the teaser as the data from a prismic api call.  It will look like this:

```javascript
const teaser = (await $prismic.api.getSingle('teaser')).data
```

Since it's a single custom type, I am using `getSingle`, then I entered the name of my custom type, `teaser`.  Then you return this function and you will be able to call it in your code.  Here is the entire changes I made to the `<script>` section:

```javascript
<script>

export default {
  name: 'Home',
  head () {
    return {
      title: 'Prismic Nuxt.js Blog',
    }
  },
  async asyncData({ $prismic, error }) {
    try{
      // Query to get blog teaser
      const teaser = (await $prismic.api.getSingle('teaser')).data
      // Returns data to be used in template
      return {
        teaser
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
```

Now to replace the placeholder info.  In the h1 blog title section, remove Hello World with:

```javascript
{{ $prismic.asText(teaser.title) }}
```

Next, replace the entire `<img>` section with this:

```javascript
 <img
    :src="teaser.heroimage.url"
  />
```

Then replace the `This is my blog post.` that is in the `<p>` section with this: 

```javascript
{{ $prismic.asText(teaser.content) }}
```

Now refresh your browser on your localhost:3000 and let's see the changes take effect.  It should have all of your content now!  There is a good chance your image is way too large in this view.  That's fine, let's talk about modifying that image next.

## Optimizing your teaser image

So all Prismic accounts use an image service called Imgix to optimize their images.  It's a really powerful item to offer for free with all Prismic accounts which is great. You can simply add corresponding imgix APIs to the end of the Prismic urls in order to optimize the images further.  For example, you could change the image url this way to resize the width to 600: 

```javascript
<img
  :src="teaser.heroimage.url + '&w=600'"
/>
```

Since we are using Nuxt, there are several great options to get easy access to responsive design with imgix.  

One way to do this would be to use the Nuxt Image module.  First, install Nuxt image:

```bash
npm install -D @nuxt/image
```

Then go into your `nuxt.config.js` file and add `@nuxt/image` to the buildModules section.  Now below that, add a new section called image and add prismic.  It will look like this: 

```javascript
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic',
    '@nuxt/image'
  ],

  image: {
    prismic: {}
  },
```

You can now go back to your index.vue file and update the `<img>` tag to a `<nuxt-img>` tag.  In the nuxt-img tag, you declare a provider to be prismic (or whatever service you choose).  You will need to add a sizes element, which will not only declare which size image to use at each size but will also create responsive breakpoints in a srcset.  Then if you have any additional APIs you want to use for your images, you can add them as `:modifers`.  In this example, I am choosing to crop images at a 1.8 to 1 aspect ratio. When I crop, I want it to crop intelligently to a face, if there is no face, then the prominent edges of the image.  I am also utilizing Client Hints, so in Chrome it will intelligently know the exact width and dpr.  You might notice an auto=format,compress in there as well, this is automatic from Prismic.  It is essentially formatting to an optimal image format based on the browser and adding some smarter compression to optimize the image.  You can read more about the different image solutions you can do with Nuxt on this website here: https://www.letsgoheadless.com/frameworks/NuxtJS.  The final nuxt-img tag is looking like this: 

```javascript
<nuxt-img
  provider="prismic"
  class="lg:w-3/5 md:w-1/2 sm:w-1/2 w-full"
  sizes="xl:60vw, lg:60vw, md:50vw, sm:90vw, xs:90vw"
  :src="teaser.heroimage.url"
  fit="crop"
  :modifiers="{ crop: 'faces,edges', ar: '1.8:1', ch: 'dpr,width'}"
        />
```

This is generating a responsive design, using the right size image at each size of the browser. You will notice I have also added some tailwind classes here, this is to have the image be 60% of the the container about 1024 pixels, then be half the container until you get smaller than 640 pixels which will have the image be full width and move the article text below the image.

## Connecting Prismic API for Repeatable Post

Now that we have our teaser post sorted, it is time to add our repeatable post.  This should be pretty easy, because it will be similar to what we did with our teaser post.  In our async call in the script section, we will need to add a const for blogPosts and call the Prismic API to look for any document types called `post`.  We will also need to return the posts as well.  The updated async call looks like this:

```javascript
async asyncData({ $prismic, error }) {
    try{
      // Query to get blog home content
      //const homepageContent = (await $prismic.api.getSingle('blog_home')).data
      const teaser = (await $prismic.api.getSingle('teaser')).data
      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "post")
        //{ orderings : '[my.post.date desc]' }
      )
      // Returns data to be used in template
      return {
        teaser,
        posts: blogPosts.results,
        //image: homepageContent.image.url,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
```

Now lets add a v-if div to show results if there are posts, then a v-else if there are no posts.  

```javascript
<div v-if="posts.length !== 0" class="flex flex-wrap"></div>
<div v-else class="blog-main">
  <p>No Posts published at this time.</p>
</div>
```

Then in the v-if section, we will add a v-for the posts.  If you are unfamiliar with Nuxt, this is a great benefit.  You're essentially setting up a repeatable section of code. It will check the api for the amount of results, then repeat the code for each result but replace certain items, such as image, title, etc for every single instance.  This is what it looks like:

```javascript
<div v-for="post in posts" :key="post.id" v-bind:post="post" class="p-4 lg:w-1/3 md:w-1/2 sm:w-full">
```

You typically do a v-for then a singular for a plural of the same type.  The key to differentiate is going to the id for each post.  This section will also be split into 3 columns in a larger view, then 2 columns, and single colum for mobile.  Next, let's add in our title, image, and content.  This will be the same way we did it for the teaser post.  I will use the responsive image as well.  Here is what it looks like:

```javascript
<div v-if="posts.length !== 0" class="flex flex-wrap">
  <div v-for="post in posts" :key="post.id" v-bind:post="post" class="p-4 lg:w-1/3 md:w-1/2 sm:w-full">
    <h2>{{ $prismic.asText(post.data.title) }}</h2>
    <nuxt-img
      provider="prismic"
      loading="lazy"
      sizes="xl:30vw, lg:40vw, md:90vw, sm:90vw, xs:90vw"
      :src="post.data.heroimage.url"
      fit="crop"
      :modifiers="{ crop: 'faces,edges', ar: '1.8:1', ch: 'dpr,width'}"
    />
    <p>{{ $prismic.asText(post.data.content) }}</p>
  </div>
</div>
```

You will notice that I did add a `loading=lazy` to the img tag here, but not for the teaser.  Generally speaking, images above the fold don't need a lazy load, but the images below would benefit greatly from this. That way images from posts are not loading too early and hurting the performance of the site.  Refresh your localhost and check that your posts are displaying.

## Deploying the Site

At this point, I think we have done a pretty good job adding our teaser post and repeatable posts.  There's certainly a ton of other great stuff we could keep doing.  Like adding a navbar, footer, or creating dynamic pages for each article.  I wanted to focus more on getting you started quickly with Prismic and Nuxt to get easily to a point where you feel more comfortable with the api and displaying the content using Nuxt.  

Next we will want to deploy this website.  I am going to choose to use Vercel for this. To make the deployment on Vercel smooth, I am going to use their nuxtjs/vercel-builder.  So let's create a `vercel.json` file in your project.  Then add this to it: 

```javascript
{
    "builds": [
        {
        "src": "nuxt.config.js",
        "use": "@nuxtjs/vercel-builder",
        "config": {}
        }
    ],
    "routes": [
        {
          "src": "/*",
            "headers": {
              "Accept-CH": "DPR, Width, Viewport-Width",
              "Feature-Policy": "ch-dpr https://images.prismic.io/ 'self'; ch-width https://images.prismic.io/ 'self'; ch-viewport-width https://images.prismic.io/ 'self'"
            }
        }
      ]
}
```

Now you can add your code to your Github repo and then login to Vercel.com.  Click on `New Project`. If you have the Vercel for Github, then you should already see your new Github repo that you created. If you don't, you can setup that integration here: https://vercel.com/docs/concepts/git/vercel-for-github.  Click on your repo, no need to change any of the default settings on Vercel, and press deploy.  After about 90 seconds, it should be deployed!
