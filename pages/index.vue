<template>
  <div class="contain" align="center" justify="center">
    <div align="center" class="home py-auto">
      <h1 class="text-left"><span>B</span>enoit Durand</h1>
      <v-divider></v-divider>
      <h2 class="text-right"><span>D</span>éveloppeur Frontend</h2>
      <div class="links-buttons">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <button v-bind="attrs" v-on="on" class="py-7 px-16 button-skills">
              <span class="filling-skills"></span>
              <b>Compétences</b>
            </button>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar class="modal-header" color="#f1f1f1">
                <Marquee />
              </v-toolbar>
              <v-card-text class="d-flex card-text">
                <div class="mt-5 skills-card">
                  <h4 class="mb-3 text-center"><span>F</span>rontend</h4>
                  <v-divider></v-divider>
                  <ul class="mt-3 pl-0">
                    <li class="text-center">JavaScript</li>
                    <li class="text-center">Vue.js / Vuex / Vuetify</li>
                    <li class="text-center">Nuxt.js</li>
                    <li class="text-center">HTML / CSS / SCSS / Bottstrap</li>
                  </ul>
                </div>
                <div class="mt-5 skills-card">
                  <h4 class="mb-3 text-center"><span>B</span>ackend</h4>
                  <v-divider></v-divider>
                  <ul class="mt-3 pl-0">
                    <li class="text-center">Node.js / Express</li>
                    <li class="text-center">MySQL</li>
                    <li class="text-center">MongoDB</li>
                    <li class="text-center">Sequelize</li>
                  </ul>
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Fermer</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>

        <NuxtLink to="/projects">
          <button class="py-7 px-16 button-projects">
            <span class="filling-projects"></span>
            <b>Réalisations</b>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import Marquee from '../components/marquee'
export default {
  components: {
    Marquee
  },
  transition: {name: 'fade'}
}
</script>

<style scoped>
.fade-enter-active {
    animation: fadeInLeft 1s;
}
.fade-leave-active {
    animation: fadeOutRight 1s;
}
h1 {
  font-size: 90px;
}
h2 {
  font-size: 50px;
}
h4 {
  font-size: 25px;
}
span {
  color: #3ebfa6;
}
.links-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 70px;
}
.button-projects, .button-skills {
  font-size: 18px;
  border: 2px solid #f1f1f1;
  position: relative;
  color: #f1f1f1;
}
.filling-projects {
  transition: all 0.5s ease-in 0s;
  background-color: #3ebfa6;
  width: 0;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: .6;
}
.button-projects:hover .filling-projects {
    width: 100%;
}
.filling-skills {
  transition: all 0.5s ease-in 0s;
  background-color: #3ebfa6;
  width: 0;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: .6;
}
.button-skills:hover .filling-skills {
    width: 100%;
}
.home {
  width: 70%;
}
.contain {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-text {
  justify-content: space-around;
}
li {
  list-style-type: none;
  color: #3ebfa6;
  font-size: 18px;
}
@media all and (max-width: 915px) {
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 35px;
  }
  .links-buttons {
    flex-direction: column;
  }
  button {
    width: 220px;
    margin: 20px auto;
  }
}
@media all and (max-width: 600px) {
  .home {
    width: 90%;
    margin-bottom: 40px;
  }
  h1 {
    font-size: 45px;
  }
  h2 {
    font-size: 25px;
  }
  .card-text {
    flex-direction: column;
  }
  .button-projects, .button-skills {
    font-size: 15px;
    padding: 20px 34px !important;
  }
}
@media all and (min-width: 1903px) {
  .home {
    width: 50%;
  }
}
</style>