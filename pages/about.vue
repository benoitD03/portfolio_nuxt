<template>
<div class="mb-16">
  <h1 class="text-center my-7"> <span>B</span>enoit Durand</h1>
  <v-timeline class="mt-10" :dense="$vuetify.breakpoint.smAndDown">

    <v-timeline-item large>
      <template v-slot:icon>
        <v-avatar>
          <img src="/benoit.jpeg">
        </v-avatar>
      </template>
      <v-card class="elevation-2 card">
        <v-card-title class="text-h5 card-header">
          <span>B</span>onjour !
        </v-card-title>
        <v-card-text class="py-7 card-text">Moi c'est Benoit, j'ai 29 ans et j'habite dans la région Auvergne-Rhône-Alpes.</v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item large>
      <template v-slot:icon>
        <v-avatar>
          <img src="/benoit.jpeg">
        </v-avatar>
      </template>
      <v-card class="elevation-2 card">
        <v-card-title class="text-h5 card-header">
          <span>M</span>on profil
        </v-card-title>
        <v-card-text class="py-7 card-text">Passionné par l'univers du web, et doté d'une envie constante de progresser, je suis diplômé en développement web (bac+2). Suite à de nombreuses heures d'apprentissage et de pratique, je suis aujourd'hui à la recherche de nouvelles opportunités.</v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item large>
      <template v-slot:icon>
        <v-avatar>
          <img src="/benoit.jpeg">
        </v-avatar>
      </template>
      <v-card class="elevation-2 card">
        <v-card-title class="text-h5 card-header">
          <span>M</span>on CV
        </v-card-title>
        <v-card-text class="py-7 card-text">Pour télécharger mon CV, c'est ici !</v-card-text>
        <a href="CV_Benoit_Durand.pdf" class="button1" target="_blank">
          <v-btn class="mb-5 ml-5">
             <span class="mdi mdi-24px mdi-download"></span>CV
          </v-btn>
        </a>
      </v-card>
    </v-timeline-item>

    <v-timeline-item large>
      <template v-slot:icon>
        <v-avatar>
          <img src="/benoit.jpeg">
        </v-avatar>
      </template>
      <v-card class="elevation-2 card"> 
        <v-card-title class="text-h5 card-header">
          <span>R</span>ecommandation
        </v-card-title>
        <v-card-text class="py-7 card-text"><q>En tant que mentor Openclassrooms j'ai eu le plaisir d'accompagner Benoit sur le cursus de Développeur Web. Sa grande autonomie, son goût pour le métier de développeur et son aisance technique me laissent présager un succès dans sa carrière de développeur.</q>
        <p class="mt-4">Nicolas Le Chenic, Développeur et Mentor chez Openclassrooms</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>

  </v-timeline>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
span {
    color: #3ebfa6;
}
h1 {
  font-size: 45px;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
.card-header {
  background: linear-gradient(-45deg, #3ebfa6, #333, #3ebfa6, #333);
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
  box-shadow: -1px 2px 10px 3px rgba(0, 0, 0, 0.3) inset;
}
.card {
    border-radius: 10px;
}
.card-text {
    color: #fff;
    font-size: 20px;
}
p {
   color: #3ebfa6;
}
</style>