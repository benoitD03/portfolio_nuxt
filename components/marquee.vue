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
    -webkit-animation: scrolling 20s linear infinite;
    -moz-animation: scrolling 20s linear infinite;
    -ms-animation: scrolling 20s linear infinite;
    -o-animation: scrolling 20s linear infinite;
    animation: scrolling 20s linear infinite;
}
.marquee-item {
    height: 45px;
    width: auto;
    flex-shrink: 0;
}
.marquee-image {
    width: auto;
    height: 100%;
}

@-webkit-keyframes scrolling {
    0% { -webkit-transform: translateX(550px);
         transform: translateX(550px);
    }
    100% { -webkit-transform: translateX(-650px);
           transform: translateX(-650px);
    }
}
@media all and (max-width: 600px) {
  @keyframes scrolling {
    0% { transform: translateX(450px);}
    100% { transform: translateX(-650px);}
  }
}
@media all and (max-width: 400px) {
  @keyframes scrolling {
    0% { transform: translateX(300px);}
    100% { transform: translateX(-600px);}
  }
}
</style>