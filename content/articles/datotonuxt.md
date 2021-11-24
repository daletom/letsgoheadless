---
title: Dato CMS to Nuxt.js
description: 'A tutorial for using the Dato CMS, a headless CMS, with the front-end framework Nuxt.js.'
img: https://tom.imgix.net/nuxt-ecomm.jpg?auto=format,compress&w=400
alt: nice image
---

Whatever my welcome paragraph is.  Include a YT link, live url link, and gh link.  Empower your NuxtJS application with `@nuxtjs/content` module: write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

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

Go to your components folder.  You can delete the `Tutorial.vue` file in the components folder. Let's create a new component called Teaser.vue.

In that component, let's add the code to show your teaser post:

```javascript
<template>
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
</template>

<script>
export default {}
</script>
```

Go to the `index.vue` file in your pages folder and replace the `<Tutorial>` component with a `<Teaser />` component.  Let's add some tailwind css to this home page as well.  Your index.vue will look like this now: 

```javascript
<template>
  <div class="lg:pl-24 lg:pr-24 pt-4">
    <Teaser />
  </div>
</template>
```

You're not using any of the Dato CMS APIs yet, I'm just building the scaffolding first.  So if you go to your terminal and type `npm run dev` or the similar yarn command, you should be able to go to `localhost:3000` and see a placeholder image with text. I have heard some instances where people see an error here for the @vue/composition-api.  If you are seeing that error, then do a cmd + c to stop the command in the terminal.  Then do:

```bash
npm install --save @vue/composition-api
```

This will clear up that error. If you didn't receive that error, no need to install this.

If you're not familiar with Tailwind CSS, I am using Tailwind for the design.  In the `class` sections of each element, I am using short words from Tailwind to create the design.  The article should appear to be on a floating card with a shadow. It will have a margin until the browser is smaller than 1024 pixels.  The text on the post will shift from being on the right to below the image once the browser goes smaller than 640 pixels.

## Creating Dato CMS GraphQL for teaser post

Next let's remove the placeholder info and connect to the Dato CMS API. We will be using Apollo to to do this.  I am going to create a new folder called apollo. Inside of apollo, go ahead and create another folder called queries.  Inside, create a file called getTeaser.gql.  This is where we will build out our graphQL.  We need the id, title, content and image from our teaser post to display.  In order to call that, I will create a call in the getTeaser.gql like this:

```
{
        teaser: teaser {
          id
          title
          content
          heroimage {
            url
          }
        }
      }
```

Now we need to import this file into the Teaser.vue.  Go to the Teaser.vue and let's create a script section at the bottom if it already isn't there.  We will import the file, then in the export section we are calling `teaser`, setting it to prefetch, and I will set the query to the same name as the file.  This is what it looks like:

```javascript
<script>
import getTeaser from '../apollo/queries/getTeaser.gql'

export default {
  apollo: {
    teaser: {
      prefetch: true,
      query: getTeaser
    }
  },
};
</script>
```

Now to replace the placeholder info.  In the h1 blog title section, remove Hello World with:

```javascript
{{teaser.title}}
```

Then replace the `This is my blog post.` that is in the `<p>` section with this: 

```javascript
{{teaser.content}}
```

Let's skip the image for one moment and do that in the next section about optimizing your teaser image.

Now refresh your browser on your localhost:3000 and let's see the changes take effect.  It should have all of your written content now!  

## Optimizing your teaser image

So all Dato CMS accounts use an image service called Imgix to optimize their images.  It's a really powerful item to offer for free with all Dato CMS accounts which is great. You can simply add corresponding imgix APIs to the end of the Dato CMS URLs in order to optimize the images further.  They also have a very intriguing responsiveImage option as well that gives you access to blur ups.  

I am going to keep it a little simple since we are using Nuxt and use the Nuxt Image functionality.  

Let's install Nuxt image:

```bash
npm install -D @nuxt/image
```

Then go into your `nuxt.config.js` file and add `@nuxt/image` to the buildModules section.  Now below that, add a new section called image and add prismic.  It will look like this: 

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
          :src="teaser.heroimage.url"
          class="lg:w-3/5 md:w-1/2 sm:w-1/2 w-full"
          sizes="xl:60vw, lg:60vw, md:50vw, sm:90vw, xs:90vw"
          fit="crop"
          :modifiers="{ crop: 'faces,edges', ar: '1.8:1', ch: 'dpr,width', auto: 'format,compress'}"
        />
```

This is generating a responsive design, using the right size image at each size of the browser. You will notice I have also added some tailwind classes here, this is to have the image be 60% of the the container about 1024 pixels, then be half the container until you get smaller than 640 pixels which will have the image be full width and move the article text below the image.

## Connecting Dato CMS API for Repeatable Post

Now that we have our teaser post sorted, it is time to add our repeatable post.  This should be pretty easy, because it will be similar to what we did with our teaser post.  In our apollo queries folder, we will need to add a getPosts.gql file now.  We will write a very similar request for the content of the posts, it will look like this:

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

Now, lets go into our components and create a `Posts.vue` component. In this code, we will add a v-for for the posts.  If you are unfamiliar with Nuxt, this is a great benefit.  You're essentially setting up a repeatable section of code. It will check the api for the amount of results, then repeat the code for each result but replace certain items, such as image, title, etc for every single instance.  This is what it looks like:

```javascript
<div v-for="allPost in allPosts" :key="allPost.id" v-bind:allPost="allPost" class="p-4 lg:w-1/3 md:w-1/2 sm:w-full">
```

You typically do a v-for then a singular for a plural of the same type.  The key to differentiate is going to the id for each post.  This section will also be split into 3 columns in a larger view, then 2 columns, and single colum for mobile.  Next, let's add in our title, image, and content.  This will be the same way we did it for the teaser post.  I will use the responsive image as well.  Here is what it looks like:

```javascript
<template>
    <div class="flex flex-wrap">
      <div v-for="allPost in allPosts" :key="allPost.id" v-bind:allPost="allPost" class="p-4 lg:w-1/3 md:w-1/2 sm:w-full">
      <h2>{{allPost.title}}</h2>
      <nuxt-img
          provider="imgix"
          :src="allPost.heroimage.url"
          sizes="xl:30vw, lg:40vw, md:90vw, sm:90vw, xs:90vw"
          fit="crop"
          loading="lazy"
          :modifiers="{ crop: 'faces,edges', ar: '1.8:1', ch: 'dpr,width', auto: 'format,compress'}"
        />
      <p>{{allPost.content}}</p>
      </div>
    </div>
</template>
```

You will notice that I did add a `loading=lazy` to the img tag here, but not for the teaser.  Generally speaking, images above the fold don't need a lazy load, but the images below would benefit greatly from this. That way images from posts are not loading too early and hurting the performance of the site.  

Now let's import that `getPosts` query we created in script section.  Again, very similar to what we did with the teaser.  

```javascript
<script>
import getPosts from '../apollo/queries/getPosts.gql'

export default {
  apollo: {
    allPosts: {
      prefetch: true,
      query: getPosts
    }
  },
};
</script>
```

Now go back to your index.vue file in your pages folder and add the `<Posts />` component.  It will look like this:

```javascript
<template>
  <div class="lg:pl-24 lg:pr-24 pt-4">
    <Teaser />
    <Posts />
  </div>
</template>
```

You might wonder why I have added componenents in the index.vue file instead of putting my code here.  I think it is easier from an organization standpoint.  Also, from a technical standpoint, it's difficult to have 2 separate graphQL calls happening in the same file.  So to make that simpler, I created 2 components, where each component had it's own graphQL call.  

## Deploying the Site

At this point, I think we have done a pretty good job adding our teaser post and repeatable posts.  There's certainly a ton of other great stuff we could keep doing.  Like adding a navbar, footer, or creating dynamic pages for each article.  I wanted to focus more on getting you started quickly with Dato CMS and Nuxt to get easily to a point where you feel more comfortable with the api and displaying the content using Nuxt.  

Next we will want to deploy this website.  I am going to choose to use Vercel for this...