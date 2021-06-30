<template>
  <picture class="h-auto w-full">
      <source
        media="(min-width: 2100px)"
        srcset="https://tom.imgix.net/letsgoheadless_logo_desktop.png?w=2800&h=550&fit=fillmax&fill=solid&fill-color=262261&auto=format%20compress"
              />
      <source
        media="(min-width: 1800px)"
        srcset="https://tom.imgix.net/letsgoheadless_logo_desktop.png?w=2100&h=500&fit=fill&fill=blur&auto=format%20compress&bg=262261"
              />
      <source
        media="(min-width: 1600px)"
        srcset="https://tom.imgix.net/letsgoheadless_logo_desktop.png?w=1800&h=450&fit=fill&fill=blur&auto=format%20compress&bg=262261"
              />
      <source
        media="(min-width: 1400px)"
        srcset="https://tom.imgix.net/letsgoheadless_logo_desktop.png?w=1600&h=450&fit=fill&fill=blur&auto=format%20compress&bg=262261"
              />
      <source
        media="(min-width: 1200px)"
        srcset="https://tom.imgix.net/letsgoheadless_logo_desktop.png?w=1400&h=450&fit=fill&fill=blur&auto=format%20compress&bg=262261"
              />
      <source
        media="(min-width: 900px)"
        srcset="https://tom.imgix.net/letsgoheadless_logo_desktop.png?w=1200&h=450&fit=fill&fill=blur&auto=format%20compress&bg=262261"
              />
      <source
        media="(min-width: 600px)"
        srcset="https://tom.imgix.net/letsgoheadless_logo_desktop.png?w=900&h=450&fit=fill&fill=blur&auto=format%20compress&bg=262261&ch=dpr"
              />
      <source
        media="(min-width: 450px)"
        src="https://tom.imgix.net/letsgoheadless_logo_mobile.png?w=600&h=380&auto=format%20compress&bg=262261&ch=dpr"
              />
      <source
        media="(min-width: 1px)"
        srcset="https://tom.imgix.net/letsgoheadless_logo_mobile.png?w=300&h=200&fit=crop&crop=focalpoint&fp-z=.4&auto=format%20compress&pad-left=40&bg=262261&dpr=2&ch=dpr"
              />
      <img width="1200" height="600" class="h-auto w-full" src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=1200&fit=crop&ar=2%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format%20compress&bg=262261"></img>
    </picture>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
