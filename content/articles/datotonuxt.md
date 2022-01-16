---
title: Dato CMS to Nuxt.js
description: 'A tutorial for using the Dato CMS, a headless CMS, with the front-end framework Nuxt.js.'
img: https://tom.imgix.net/datotonuxt_tutorial.png?auto=format,compress&w=400
alt: Dato CMS to Nuxt Tutorial image
---

Welcome to a tutorial using Dato CMS as a headless CMS with Nuxt.js as a front-end framework.  I will take you through to steps of starting a Nuxt.js app from start to finish.  We will also be setting up a new Dato CMS account as well.  The tutorial will also be utilizing Tailwind CSS as the UI framework, the Nuxt Image module to generate a responsive design with imgix images from Dato CMS, Apollo for GraphQL, and deploying with Vercel.

## Installation

Run the following command to start a nuxt project:

```bash 
npm init nuxt-app "projectname"
```

You will see a list of items to fill out in your terminal to create your project. I am using Javascript, choose your package manager, Tailwind CSS as my UI framework, none of these additional modules, choose the LINTER of your choice, no testing framework, a Universal rendering mode, Static hosting, I choose a jsconfig.json since I am using the VS Code editor, then your github info. The Universal rendering mode and Static hosting are important to do, the rest you can change or modify as you wish.

If you need more info about installing Nuxt, I would suggest following the initial intructions in the Nuxt.js page of this website: https://www.letsgoheadless.com/frameworks/NuxtJS.


## Create a Dato CMS Account

You will now need to create a Dato CMS account if you do not have one.  Create an account and a new project.  Once you have created a project, you will need to make two different models.  Go to the settings tab and click on models.  You will then see a purple plus sign at the bottom to add models. When you are making a model, you have the opportunity to make it a single instance or not.  One will need to be a single and the other will not.  Our single instance will be a prominent article at the top of our project. I will call this one `teaser`. Our repeatable custom type will be a list of posts to go below our prominent article at the top. I will call this one `post`.

For both models, you will be adding the same fields.  You will need to add a single line text field, a signle asset media field, and a multiple paragraph text field. The names I gave them were Title, Content, and HeroImage.  In the validations section, I did click required for all three of these.  If you have never made a Dato CMS account before, you can get more detailed instructions in my Prismic CMS section here: https://www.letsgoheadless.com/cmss/datocms.

Once you have created your account, it would be great to create some content as well.  At least create one item for your teaser model and one item for your post model.  If you would like to copy the exact content I am entering, you can find that here: 

## Integrating Your Dato CMS Account

Once you have some content, lets connect Nuxt to that Dato CMS account.  While you are logged in to Dato CMS, click the settings button again and go to API tokens.  You can press that purple plus buttonn to create tokens. You can create a Read-Only API token for this.  Give it permissions to access the content delivery API, the draft content, and the Content Management API.  Save the API token generated, we are going to add that to Nuxt as a `.env`.  Go to your code editor and create a file called `.env` that is not in any folder.  Then inside that, name the token and put the API token value.  Like this:

```
DATO_API_TOKEN=12345678
```

Now in order to connect the API from Dato CMS, we are going to use Apollo to access their graphQL endpoint.  You can certainly use another tool as well, like Axios as well.  

You will next need to install the `nuxtjs/apollo` plugin to your project.

```bash
npm install @nuxtjs/apollo
```

In your `nuxt.config.js` file, add this to your modules section. Then below the modules section, create an apollo section.  Here we will declare our endpoint for Dato's graphql;  `https://graphql.datocms.com` and provide the token in the authorization headers.  The file will look like this:

```javascript
modules: [
    '@nuxtjs/apollo',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.datocms.com',
        httpLinkOptions: {
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.DATO_API_TOKEN}`
          }
        }
      }
    }
  },
```


This should allow us to add a query for our content in Dato CMS and view it.


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

You're not using any of the Dato CMS APIs yet, I'm just building the scaffolding first.  So if you go to your terminal and type `npm run dev` or the similar yarn command, you should be able to go to `localhost:3000` and see a placeholder image with text. I have heard some instances where people see an error here for the @vue/composition-api.  If you are seeing that error, then do a cmd + c to stop the command in the terminal.  Then do:

```bash
npm install --save @vue/composition-api
```

This will clear up that error. If you didn't receive that error, no need to install this.

If you're not familiar with Tailwind CSS, I am using Tailwind for the design.  In the `class` sections of each element, I am using short words from Tailwind to create the design.  

## Creating Dato CMS GraphQL for posts

Next let's remove the placeholder info and connect to the Dato CMS API. We will be using Apollo to to do this.  I am going to create a new folder called apollo. Inside of apollo, go ahead and create another folder called queries.  Inside, create a file called getPosts.gql.  This is where we will build out our graphQL.  We need the id, title, content and image from our post to display.  In order to call that, I will create a call in the getPosts.gql like this:

```
{
        allPosts: allPosts {
          id
          title
          content
          heroimage {
            url
          }
        }
      }
```

Now we need to import this file into the Tutorial.vue.  Go to the Tutorial.vue and let's create a script section at the bottom if it already isn't there.  We will import the file, then in the export section we are calling `allPosts`, setting it to prefetch, and I will set the query to the same name as the file.  This is what it looks like:

```javascript
<script>
import allPosts from '../apollo/queries/allPosts.gql'

export default {
  apollo: {
    allPosts: {
      prefetch: true,
      query: allPosts
    }
  },
};
</script>
```

You can also modify the template area, to bind the data correctly to our Tutorial component. Like this: 

```javascript
<Tutorial v-bind:data="allPosts" />
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
<img class="h-48 w-full object-cover" :src="allPost.heroimage.url" alt="" />
```
In the p section, with your Example Title placeholder, replace it with this:

```javascript
{{allPost.title}}
```

Then replace the `Example post.`: 

```javascript
<p class="mt-3 text-base text-gray-500" >
  {{allPost.content}}
</p> 
```

Now refresh your browser on your localhost:3000 and let's see the changes take effect.  It should have all of your content now! 

## Optimizing your teaser image

So all Dato CMS accounts use an image service called imgix to optimize their images.  It's a really powerful item to offer for free with all Dato CMS accounts which is great. You can simply add corresponding imgix APIs to the end of the Dato CMS URLs in order to optimize the images further.  They also have a very intriguing responsiveImage option as well that gives you access to blur ups.  

I am going to keep it a little simple since we are using Nuxt and use the Nuxt Image functionality.  

Let's install Nuxt image:

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

You can now go back to your index.vue file and update the `<img>` tag to a `<nuxt-img>` tag.  In the nuxt-img tag, you declare a provider to be imgix (or whatever service you choose).  You will need to add a sizes element, which will not only declare which size image to use at each size but will also create responsive breakpoints in a srcset.  Then if you have any additional APIs you want to use for your images, you can add them as `:modifers`.  In this example, I am choosing to crop images at a 1.8 to 1 aspect ratio. When I crop, I want it to crop intelligently to a face, if there is no face, then the prominent edges of the image.  I am also utilizing Client Hints, so in Chrome it will intelligently know the exact width and dpr.  I also want to add automatic formatting and compression.  It is essentially formatting to an optimal image format based on the browser and adding some smarter compression to optimize the image.  You can read more about the different image solutions you can do with Nuxt on this website here: https://www.letsgoheadless.com/frameworks/NuxtJS.  The final nuxt-img tag is looking like this: 

```javascript
<nuxt-img
  provider="imgix"
  class="h-48 w-full object-cover"
  sizes="xl:413px, lg:50vw, md:448px, sm:900px, xs:90vw)"
  :src="allPost.heroimage.url"
  fit="crop"
  :modifiers="{ crop: 'faces,entropy', ar: '2.3:1', ch: 'dpr,width', auto: 'format,compress'}"
        />
```

This is generating a responsive design, using the right size image at each size of the browser. You will notice I have also added some sizes here, this is what generates different srcset versions to correctly size the image to match the css. It's key to add the sizes.  

## Deploying the Site

At this point, I think we have done a pretty good job adding our teaser post and repeatable posts.  There's certainly a ton of other great stuff we could keep doing.  Like adding a navbar, footer, or creating dynamic pages for each article.  I wanted to focus more on getting you started quickly with Dato CMS and Nuxt to get easily to a point where you feel more comfortable with the api and displaying the content using Nuxt.  

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