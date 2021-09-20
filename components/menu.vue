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
  font-size: 19px;
}
button {
  padding: 5px 13px;
  box-shadow: -1px 2px 10px 3px rgba(0, 0, 0, 0.3) inset;
  background: #3ebfa6;
  border-radius: 50%;
  transition: all .4s ease-in;
}
button:hover {
  -webkit-transform:rotateY(180deg); 
  -moz-transform:rotateY(180deg); 
  -ms-transform:rotateY(180deg); 
  -o-transform:rotateY(180deg); 
  transform: rotateY(180deg);
}

</style>