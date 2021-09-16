<template>
  <div>
    <h1>Page de mes Réalisations !</h1>
    <v-carousel v-model="model">
      <v-carousel-item v-for="(project, id) in projects" :key="id">
        <v-sheet :project="project" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">Projet {{ id + 1 }}</div>
            <img align="center" :src="project.image" :alt="project.title" />
            <NuxtLink :to="{name: 'projects-id', params: { id: project.id}}">
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
  async asyncData({ store }) {
    return {
      projects : store.getters.getProjects
    }
  }
};
</script>

<style>
img {
  width: 500px;
}
</style>