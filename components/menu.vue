<template>
  <div class="text-center">
      <NuxtLink to="/"><button class="mt-8"><span class="mdi mdi-36px mdi-home"></span></button></NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
span {
  color: #121212; 
}
button {
  padding: 5px 13px;
  box-shadow: -1px 2px 10px 3px rgba(0, 0, 0, 0.3) inset;
  background: #3ebfa6;
  border-radius: 50%;
  transition: all .4s ease-in;
}
button:hover {
  -webkit-transform:rotate(360deg) scale(1.2); 
  -moz-transform:rotate(360deg) scale(1.2); 
  -ms-transform:rotate(360deg) scale(1.2); 
  -o-transform:rotate(360deg) scale(1.2); 
  transform: rotate(360deg) scale(1.2);
}

@media all and (max-width: 1024px) {
  button {
  padding: 5px 13px;
  box-shadow: none;
  background: #121212;
}
span {
  color: #3ebfa6; 
}
}
</style>