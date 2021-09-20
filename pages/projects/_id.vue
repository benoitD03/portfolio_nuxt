<template>
  <div class="mb-16">
    <div class="back-link"> 
        <NuxtLink to="/projects">
            <span class="mdi mdi-36px mdi-arrow-left-bold-circle"></span>
        </NuxtLink>
    </div>
    <h1 class="text-center my-15">{{ project.title }}</h1>
    <div class="text-center">
        <v-row justify="center"> 
        <v-col cols="12" lg="6" sm="12" md="12">
            <img :src="project.image" alt="project.title" />
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12">
            <img :src="project.image" alt="project.title" />
        </v-col>
        </v-row>
    </div>
    <v-divider class="mt-9"></v-divider>
    <div class="text-container mt-9">
      <h3 class="text-center mb-9"><span>D</span>escription</h3>
      <p class="text-center" style="font-size: 20px">{{ project.description }}</p>
      <v-divider class="mt-9"></v-divider>
      <h3 class="text-center my-9"><span>S</span>tack technique</h3>
      <div class="techno"> 
      <span class="mr-3" v-for="techno in project.technos" :key="techno.index">
          <b>{{techno}}</b>    
      </span>
      </div>
      <v-divider class="mt-9"></v-divider>
      <h3 class="text-center my-9"><span>I</span>nformations supplémentaires</h3>
      <div class="text-center links-container">
          <a :href="project.github" target="_blank"><img class="projects-links" src="/github.png"/></a>
          <a v-if="project.link" :href="project.link" target="_blank" class="ml-3"><img class="projects-links" src="/internet.png"/></a>
      </div>
      <v-divider class="mt-9"></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {
        id: "",
        title: "",
        image: "",
        decription: "",
        technos: [],
      },
    };
  },
  async asyncData({ store, route }) {
    return {
      project: store.getters.getProjects.find(
        (project) => project.id === route.params.id
      ),
    };
  },
};
</script>

<style scoped>
.back-link {
    position: absolute;
    top: 2px;
    left: 15px;
}
h1 {
  font-size: 40px;
  background: #3ebfa6;
  width: 100%;
  border-radius: 10px;
   box-shadow: -1px 2px 10px 3px rgba(0, 0, 0, 0.3) inset;
}
h3 {
    font-size: 30px;
}
img {
  width: 500px;
  height: auto;
  border-radius: 10px;
}
.project-container {
  display: flex;
}
span {
    color: #3ebfa6;
}
.techno {
    display: flex;
    justify-content: center;
    font-size: 20px;
}
.projects-links {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  transition: all .4s ease-in-out;
}
.projects-links:hover {
    transform: scale(.8);
}
</style>