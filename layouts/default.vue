<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
      <div class="social-container">
        <a class="mr-2" href="https://linkedin.com/in/benoit-durand-556b94209" target="_blank">
          <img class="social" src="/linkedin.png"/>
        </a>
        <a href="https://github.com/benoitD03" target="_blank">
          <img class="social" src="/github.png"/>
        </a>
      </div>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; Benoit Durand</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration: none;
}
.container {
  height: 100%;
}
.social-container {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.social {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
</style>
