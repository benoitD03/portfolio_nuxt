<template>
  <div class="contain" align="center" justify="center">
    <div align="center" class="home py-auto">
      <h1 class="text-left"><span>B</span>enoit Durand</h1>
      <v-divider></v-divider>
      <h2 class="text-right"><span>D</span>éveloppeur Frontend</h2>
      <div class="links-buttons">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" class="py-10 px-16 button"
              ><b>Compétences</b></v-btn
            >
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
                  <ul class="mt-3">
                    <li>JavaScript</li>
                    <li>Vue.js / Vuex / Vuetify</li>
                    <li>Nuxt.js</li>
                    <li>HTML / CSS / SCSS / Bottstrap</li>
                  </ul>
                </div>
                <div class="mt-5 skills-card">
                  <h4 class="mb-3 text-center"><span>B</span>ackend</h4>
                  <v-divider></v-divider>
                  <ul class="mt-3">
                    <li>Node.js / Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Sequelize</li>
                  </ul>
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>

        <NuxtLink to="/projects">
          <v-btn class="py-10 px-16 button" elevation="2"
            ><b>Réalisations</b></v-btn
          >
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
  }
}
</script>

<style scoped>
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
.button {
  font-size: 18px;
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
</style>