<template>
  <v-app>
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

</style>
