<template>
  <div class="nuevoPedido">
    <div>

<v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
        editable
      >
        Agregar Cliente
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
        editable
      >
        Agregar Detalle de Pedido
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Vista Previa
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="400px"
        >
        <detalle-cliente></detalle-cliente>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="300px"
        >
        
      <detalle-pedido></detalle-pedido>

        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>


      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
        {{ snackText }}

        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>
<script>
import DetallePedido from "../components/DetallePedido.vue";
import DetalleCliente from "../components/DetalleCliente.vue";

export default {
  components: {
    DetallePedido,DetalleCliente
  },
  data() {
    return {
      e1:1,
      snack: false,
      snackColor: "",
      snackText: "",
     
    };
  },
  methods: {
  },
  computed: {
  },
};
</script>
