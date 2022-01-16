<template>
  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Example Blog Posts I use
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          I have created some not so important news from a galaxy far far away. I use these posts and images in my tutorials. If you would like to use them as well, you are welcome to.
        </p>
      </div>
      <div class="mt-12 max-w-lg max-w-md mx-auto grid gap-5 lg:grid-cols-3 md:grid-cols-2 lg:max-w-none md:max-w-none">
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-1">
            <ix-img
              class="h-48 w-full object-cover"
              src="/2021/02/cloudriders.jpeg"
              alt="Cloudriders"
              :imgixParams="{ ar: '2.3:1', fit: 'crop'}"
              sizes="(min-width: 1344px) 413px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, (min-width: 545px) 512px, 90vw"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a href="https://imgix.tomdale.website/2021/02/cloudriders.jpeg?dl=cloudriders.jpg" class="hover:underline">
                  Download Image
                </a>
              </p>
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Marauders Strike Again on Gargon
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Six marauders identifying themselves as "Cloud Riders" recently raided an Imperial spice cache on Gargon. The marauders stole Imperial equipment before making their escape. It is believe they are lead by a marauder called Enfys Nest, whom has been seen on Savareen. Anyone with knowledge of these marauders or there whereabouts are to immediately contact their local Imperial garrison.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <ix-img
              class="h-48 w-full object-cover"
              src="/2021/02/mustafarcastle.jpg"
              alt="Mustafar Castle"
              :imgixParams="{ ar: '2.3:1', fit: 'crop'}"
              sizes="(min-width: 1344px) 413px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, (min-width: 545px) 512px, 90vw"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a href="https://imgix.tomdale.website/2021/02/mustafarcastle.jpg?dl=mustafarcastle.jpg" class="hover:underline">
                  Download Image
                </a>
              </p>
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Tourism Returns to Mustafar
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Ancient stories tell of an amazing garden scape on the planet of Mustafar. But Mustafar has always been an ash-laden volcanic planet. Following a stint of separatist mining activities as well as being the headquarters of a crime syndicate, the Galactic Empire has transformed this planet with a wonderful castle. Tourism is now picking up, with a rush of children visiting this castle.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <ix-img
              class="h-48 w-full object-cover"
              src="/2021/02/maxrebo.jpg"
              alt="Max Rebo Band Poster"
              :imgixParams="{ ar: '2.3:1', fit: 'crop', crop: 'entropy'}"
              sizes="(min-width: 1344px) 413px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, (min-width: 545px) 512px, 90vw"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a href="https://imgix.tomdale.website/2021/02/maxrebo.jpg?dl=maxrebo.jpg" class="hover:underline">
                  Download Image
                </a>
              </p>
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Max Rebo Band Tops Charts
                </p>
                <p class="mt-3 text-base text-gray-500">
                  The Max Rebo Band, led by lead singer Snootles, has recently been topping the galactic charts with their new song Galactic Dance Blast. Although the band has existed for a long time in many iterations, they have become particularly popular since playing at Jabba's Palace.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <ix-img
              class="h-48 w-full object-cover"
              src="/2021/02/podrace.jpg"
              alt="Anakin Podracing"
              :imgixParams="{ ar: '2.3:1', fit: 'crop'}"
              sizes="(min-width: 1344px) 413px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, (min-width: 545px) 512px, 90vw"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a href="https://imgix.tomdale.website/2021/02/podrace.jpg?dl=podrace.jpg" class="hover:underline">
                  Download Image
                </a>
              </p>
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Young Pod Racer Wins Title
                </p>
                <p class="mt-3 text-base text-gray-500">
                  This year's Boonta Eve Classic at the Grand Arena on Tattoine saw an epic race between Sebulba and a young human boy. During the event, racers were attacked by a tribe of Tusken Raiders. On the final lap of the race young boy won!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <ix-img
              class="h-48 w-full object-cover"
              src="/2021/02/aotcsenate.jpeg"
              alt="Imperial Galactic Senate"
              :imgixParams="{ ar: '2.3:1', fit: 'crop'}"
              sizes="(min-width: 1344px) 413px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, (min-width: 545px) 512px, 90vw"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a href="https://imgix.tomdale.website/2021/02/aotcsenate.jpeg?dl=aotcsenate.jpg" class="hover:underline">
                  Download Image
                </a>
              </p>
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Financial Reform Bill Passes
                </p>
                <p class="mt-3 text-base text-gray-500">
                  A controversial bill was passed earlier at the Galactic Senate. The bill removes regulations from the banks, allowing loans to be given to the Senate. It is believed the Senate will use this bill to secure additional money for troops to expand their Grand Army.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <ix-img
              class="h-48 w-full object-cover"
              src="/2021/02/sleepingbag.jpeg"
              alt="Sleeping Bag"
              :imgixParams="{ ar: '2.3:1', fit: 'crop'}"
              sizes="(min-width: 1344px) 413px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, (min-width: 545px) 512px, 90vw"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a href="https://imgix.tomdale.website/2021/02/sleepingbag.jpeg?dl=sleepingbag.jpg" class="hover:underline">
                  Download Image
                </a>
              </p>
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Cold Weather Survival Skills
                </p>
                <p class="mt-3 text-base text-gray-500">
                  As Far Far Away News explores more parts of the galaxy, we continue to learn more about survival skills from other civilizations. On Hoth, they have adapted to extreme cold weather by using a recently dead carcass of an animal. If you want to experience the same thing, luckily you don't need an animal carcass, as a sleeping bag has been created to mirror this experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <ix-img
              class="h-48 w-full object-cover"
              src="/2021/02/larshomestead.jpg"
              alt="Lars Homestead on Tattooine"
              :imgixParams="{ ar: '2.3:1', fit: 'crop'}"
              sizes="(min-width: 1344px) 413px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, (min-width: 545px) 512px, 90vw"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a href="https://imgix.tomdale.website/2021/02/larshomestead.jpg?dl=larshomestead.jpg" class="hover:underline">
                  Download Image
                </a>
              </p>
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Tips for Farming in a Desert
                </p>
                <p class="mt-3 text-base text-gray-500">
                  There's no harder terrain for a desert than a farm. But if we take some tips from the Lars family, they can show how to successfully run a farm in a desert on a budget. Their suggestions include adopting children to use as labor and buying from discount marketplaces such as the Jawas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
const posts = [
  {
    title: 'Boost your conversion rate',
    href: 'https://imgix.tomdale.website/2021/02/cloudriders.jpeg?dl=1',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://imgix.tomdale.website/2021/02/cloudriders.jpeg',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default {
  setup() {
    return {
      posts,
    }
  },
}
</script>