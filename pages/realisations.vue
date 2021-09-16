<template>
  <div>
    <h1>Page de mes Réalisations !</h1>
    <v-carousel v-model="model">
      <v-carousel-item v-for="(project, id) in projects" :key="id">
        <v-sheet :project="project" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">Projet {{ id + 1 }}</div>
            <img align="center" :src="project.image" :alt="project.title" />
            <NuxtLink to="/">
              <v-btn v-bind="attrs" v-on="on" class="py-12 px-16"
                ><b>Voir le projet</b></v-btn
              >
            </NuxtLink>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  async asyncData() {
    return {
      projects: [
        {
          id: 1,
          title: "Frontend e-commerce + interface administrateur",
          description:
            "Réalisation d'un site type e-commerce : développement d'une partie administrateur permettant d'ajouter, modifier et supprimer des articles, et développement de la partie client, avec les fonctionnalités d'ajout et de suppression d'articles dans un panier.",
          image: "/image_ecommerce.png",
          technos: ["Vue.js", "Vuex", "Json-server", "localStorage"],
        },
        {
          id: 2,
          title: "Réseau social d'entreprise",
          description:
            "Réalisation d'un réseau social, avec la gestion des utilisateurs ( connexion, inscription, modifications et suppressions de profil, possibilité aux admin de supprimer d'autres utilisateurs, etc ), et partage de posts sur un fil d'actualité ( avec également la possibilité aux admin de supprimer tous les posts des utilisateurs )",
          image: "/image_groupomania.png",
          technos: ["Vue.js", "Vuetify", "Node.js", "MySQL", "Sequelize"],
        },
      ],
    };
  },
};
</script>

<style>
img {
  width: 500px;
}
</style>