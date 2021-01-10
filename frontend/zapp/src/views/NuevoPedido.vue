<template>
  <div class="nuevoPedido">
    <div>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1" editable>
            Agregar Cliente
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" editable>
            Agregar Detalle de Pedido
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3"> Vista Previa </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12 paso-contenido" flat>
              <detalle-cliente></detalle-cliente>
            </v-card>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                :disabled="pedido.cliente == null"
                depressed
                x-large
                @click="e1 = 2"
              >
                Continuar
              </v-btn>
            </v-card-actions>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-12" color="grey lighten-1">
              <detalle-pedido></detalle-pedido>
            </v-card>
            <v-card-actions>
              <v-btn color="primary" depressed x-large @click="e1--">
                Regresar
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" depressed x-large @click="e1++">
                Continuar
              </v-btn>
            </v-card-actions>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-12 paso-contenido" color="grey lighten-1">
              <v-sheet
                color="white"
                elevation="1"
                height="250"
                width="250"
              ></v-sheet>
            </v-card>
            <v-card-actions>
              <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-card-actions>
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
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    DetallePedido,
    DetalleCliente,
  },
  data() {
    return {
      e1: 1,
      snack: false,
      snackColor: "",
      snackText: "",
    };
  },
  methods: {
    ...mapMutations(["crearDetallePedido"])
    ,
  },
  computed: {
    ...mapState(["pedido"]),
  },
  created(){
    this.crearDetallePedido(1);
  }
};
</script>

<style scoped>
.paso-contenido {
  height: 320px;
}
</style>