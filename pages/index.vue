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
              <v-toolbar color="primary" dark
                >Opening from the bottom</v-toolbar
              >
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
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

<style scoped>
h1 {
  font-size: 90px;
}
h2 {
  font-size: 50px;
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
</style>