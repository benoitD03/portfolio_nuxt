<template>
  <v-container>
    <div align="center">
    <h1><span>B</span>enoit Durand</h1>
    <h2><span>D</span>éveloppeur Frontend</h2>
    <div class="mt-5">
      
      <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="py-12 px-16"
          ><b>Compétences</b></v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the bottom</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>

      <NuxtLink to="/realisations">
        <v-btn class="py-12 px-16" elevation="2"><b>Réalisations</b></v-btn>
      </NuxtLink>
    </div>
    </div>
  </v-container>
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
</style>