<template>
  <v-app>
    <v-app-bar v-if="showBar" app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1>Zapateria</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn :to="{ name: 'Home' }">
        <span class="mr-2">Regresar al Home</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "App",

  components: {},

  data: () => ({
  }),
  computed:{
    ...mapState(["showBar"])
  }
};
</script>
