<template>
  <div class="mt-16">
    <div class="social-container">
      <a
        class="mr-2"
        href="https://linkedin.com/in/benoit-durand-556b94209"
        target="_blank"
      >
        <img class="social" src="/linkedin.png" />
      </a>
      <a class="mr-2" href="https://github.com/benoitD03" target="_blank">
        <img class="social" src="/github.png" />
      </a>
      <a href="mailto:bens.92@hotmail.fr">
        <img class="social" src="/email.png" />
      </a>
    </div>
    <div class="about-link">
      <NuxtLink to="/about" class="mt-5 mr-5"
        ><span><b>À propos</b></span></NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.social-container {
  position: absolute;
  bottom: 30px;
  left: 20px;
}
.social {
  width: 30px;
  height: 30px;
  border-radius: 10px;
}
.about-link {
  position: absolute;
  bottom: 30px;
  right: 20px;
  transition: transform .3s ease-in;
}
.about-link:hover {
  transform: scale(1.2);
}
span {
  color: #3ebfa6 ;
  font-size:30px;
}
@media all and (max-width: 500px) {
  span {
    font-size: 25px;
  }
  .about-link {
    bottom: 32px;
  }
}
</style>