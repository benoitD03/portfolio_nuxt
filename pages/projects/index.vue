<template>
  <div class="mb-16">
    <h1 class="text-center my-9"><span>R</span>éalisations</h1>
    <v-carousel style="border-radius: 10px;" height="100%" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(project, id) in projects" :key="id">
        <v-sheet class="v-sheet" :project="project" height="100%" tile>
          
            <h3 class="text-center mx-auto mt-6">{{ project.title }}</h3>
            <div class="caroussel-content mb-5">
            <NuxtLink align="center" class="text-center mb-10" :to="{name: 'projects-id', params: { id: project.id}}">
              <div class="img-container">
              <img :src="project.image" :alt="project.title" />  
              </div>
            </NuxtLink>
            </div>
          
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: []
    }
  },
  asyncData({ store }) {
    return {
      projects : store.getters.getProjects
    }
  },
  transition: {name: "fade"}
};
</script>

<style scoped>
.fade-enter-active {
    animation: fadeInLeft 1s;
}
.fade-leave-active {
    animation: fadeOutRight 1s;
}
a {
  width: 80%;
}
.img-container {
  overflow: hidden;
  border-radius: 0 0 5px 5px;
}
img {
  width: 100%;
  height: 90%;
  -webkit-transition: all 1s ease; 
  -moz-transition: all 1s ease; 
  -ms-transition: all 1s ease; 
  -o-transition: all 1s ease; 
  transition: all 1s ease;
  object-fit: cover;
  border-radius: 0 0 5px 5px;
  filter: grayscale(.5);
}
img:hover {
  -webkit-transform:scale(1.15); 
  -moz-transform:scale(1.15); 
  -ms-transform:scale(1.15); 
  -o-transform:scale(1.15); 
  transform:scale(1.15) rotateZ(2deg);
  filter: grayscale(0);
}
h3 {
  width: 80%;
  background: #3ebfa6;
  font-size: 30px;
  border-radius: 5px 5px 0 0;
  box-shadow: -1px 2px 10px 3px rgba(0, 0, 0, 0.3) inset;
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
  background: #121212;
}
.v-sheet {
  background: #121212;
}
@media all and (max-width: 670px) {
  h3 {
    font-size: 18px;
    width: 100%;
  }
  a {
    width: 100%;
    margin-bottom: 20px !important;
  }
}
@media all and (min-width: 1903px) {
  a {
    width: 60%;
  }
  img {
    margin-top: 0px !important;
  }
  h3 {
    width: 60%;
  }
}
</style>