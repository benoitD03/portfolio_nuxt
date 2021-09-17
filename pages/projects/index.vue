<template>
  <div>
    <h1 class="text-center my-9"><span>R</span>éalisations</h1>
    <v-carousel style="border-radius: 10px;" height="500" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(project, id) in projects" :key="id">
        <v-sheet :project="project" height="100%" tile>
          
            <h3 class="text-center my-6">{{ project.title }}</h3>
            <div class="caroussel-content">
            <NuxtLink align="center" class="text-center" :to="{name: 'projects-id', params: { id: project.id}}">
              <img class="mt-10" :src="project.image" :alt="project.title" />  
            </NuxtLink>
            </div>
          
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

<style scoped>
a {
  width: 70%;
}
img {
  border-radius: 10px;
  width: 70%;
  -webkit-transition: all 1s ease; /* Safari et Chrome */
  -moz-transition: all 1s ease; /* Firefox */
  -ms-transition: all 1s ease; /* Internet Explorer 9 */
  -o-transition: all 1s ease; /* Opera */
  transition: all 1s ease;
}
img:hover {
  -webkit-transform:scale(1.25); /* Safari et Chrome */
  -moz-transform:scale(1.25); /* Firefox */
  -ms-transform:scale(1.25); /* Internet Explorer 9 */
  -o-transform:scale(1.25); /* Opera */
  transform:scale(1.25);
}
h3 {
  background: #3ebfa6;
  font-size: 30px;
  border-radius: 10px 10px 0 0 ;
}
h1 {
  font-size: 45px;
}
span {
  color: #3ebfa6;
}
.caroussel-content {
  display: flex;
  justify-content: center;
}
.v-carousel__controls {
  background: #3ebfa6 !important;
}
</style>