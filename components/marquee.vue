<template>
  <div class="marquee">
      <ul class="marquee-content">
          <li class="marquee-item mr-7 my-auto"><img class="marquee-image mt-2" src="/javascript.png"></li>
          <li class="marquee-item mr-7 my-auto"><img class="marquee-image mt-2" src="/vue.png"></li>
          <li class="marquee-item mr-7 my-auto"><img class="marquee-image mt-2" src="/nuxt.png"></li>
          <li class="marquee-item mr-7 my-auto"><img class="marquee-image mt-2" src="/html.png"></li>
          <li class="marquee-item mr-7 my-auto"><img class="marquee-image mt-2" src="/css.png"></li>
          <li class="marquee-item mr-7 my-auto"><img class="marquee-image mt-2" src="/node.png"></li>
          <li class="marquee-item mr-7 my-auto"><img class="marquee-image mt-2" src="/mysql.png"></li>
          <li class="marquee-item"><img class="marquee-image" src="/mongodb.png"></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.marquee {
    width: 600px;
    height: 64px;
    overflow: hidden; 
}
.marquee-content {
    display: flex;
    list-style: none;
    animation: scrolling 20s linear infinite;
}
.marquee-item {
    width: auto;
    height: 45px;
    flex-shrink: 0;
}
.marquee-image {
    width: 100%;
    height: 100%;
}

@keyframes scrolling {
    0% { transform: translateX(550px);}
    100% { transform: translateX(-650px);}
}

</style>