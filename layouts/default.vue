<template>
  <v-app>
    <v-main>
      <Menu />
      <v-container> 
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <SocialLink />
    </v-footer>
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
  height: 100%;
}

</style>
