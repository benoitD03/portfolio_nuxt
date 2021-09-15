<template>
  <v-container>
    <div align="center">
    <h1><span>B</span>enoit Durand</h1>
    <h2><span>D</span>éveloppeur Frontend</h2>
    <div class="mt-5">
      <v-btn class="py-12 px-16" elevation="2"><b>Compétences</b></v-btn>
      <NuxtLink to="/realisations">
        <v-btn class="py-12 px-16" elevation="2"><b>Réalisations</b></v-btn>
      </NuxtLink>
    </div>
    </div>
  </v-container>
</template>

<style scoped>
h1 {
  font-size: 90px;
}
h2 {
  font-size: 50px;
}
span {
  color: #3ebfa6;
}
</style>