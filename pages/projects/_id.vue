<template>
  <div>
      <h1>{{ project.title }}</h1>
      <img :src="project.image" alt="project.title">
      <p>{{ project.description }}</p>
      <v-btn v-for="techno in project.technos" :key="techno.index">{{ techno }}</v-btn>
  </div>
</template>

<script>
export default {
data() {
    return {
        project: {
            id: '',
            title: '',
            image: '',
            decription: '',
            technos: []
        }
    }
},
async asyncData({ store, route }) {
    return {
        project: store.getters.getProjects.find(project => project.id === route.params.id)
    }
}
}
</script>

<style>

</style>