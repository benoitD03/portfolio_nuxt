<template>
  <v-app id="app">
    <v-main>
      <Menu />
      <v-container class="pb-0 mb-0"> 
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-footer :absolute="!fixed" app  style="height: 50px;"> -->
      <SocialLink />
    <!-- </v-footer> -->
  </v-app>
</template>

<script>
import Menu from '../components/menu'
import SocialLink from '../components/socialLink'
export default {
  head: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Itim&display=swap' }]
  },
  components: {
    Menu,
    SocialLink
  }
};
</script>

<style>
a {
  text-decoration: none;
}
.container {
  height: 90%;
}
#app {
  font-family: 'Itim', sans-serif;
}
</style>
