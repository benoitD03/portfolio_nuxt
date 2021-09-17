<template>
  <div class="nav">
      <NuxtLink to="/projects" class="mt-5 ml-5"><span><b>Réalisations</b></span></NuxtLink>
      <NuxtLink to="/"  class="mt-1"><span class="mdi mdi-36px mdi-home"></span></NuxtLink>
      <NuxtLink to="/about" class="mt-5 mr-5"><span><b>A propos</b></span></NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav {
    display: flex;
    justify-content: space-between;
}
span {
  color: #3ebfa6;
  font-size: 19px;
}
</style>