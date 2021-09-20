<template>
  <div class="text-center">
      <NuxtLink to="/"  class="mt-1"><button><span class="mdi mdi-36px mdi-home"></span></button></NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
span {
  color: #3ebfa6;
  font-size: 19px;
}
button {
  width: 36px;
  height: 36px;
  transition: all .4s ease-in;
}
button:hover {
  transform: rotateY(180deg) scale(1.8);
}

</style>