<template>
  <div>
    <h1 class="text-center my-15">{{ project.title }}</h1>
    <v-row>
      <v-col cols="12" lg="6" sm="12" md="12">
        <img :src="project.image" alt="project.title" />
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <img :src="project.image" alt="project.title" />
      </v-col>
    </v-row>
    <v-divider class="mt-9"></v-divider>
    <div class="text-container mt-9">
      <h3 class="text-center mb-9"><span>D</span>escription</h3>
      <p>{{ project.description }}</p>
      <v-divider class="mt-9"></v-divider>
      <h3 class="text-center my-9"><span>S</span>tack technique</h3>
      <div class="techno"> 
      <span class="mr-3" v-for="techno in project.technos" :key="techno.index">
          <b>{{techno}}</b>    
      </span>
      </div>
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
h1 {
  font-size: 40px;
  background: #3ebfa6;
  width: 100%;
  border-radius: 10px;
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
}
</style>