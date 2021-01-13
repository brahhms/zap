<template>
  <div class="nuevoPedido">
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
              :disabled="clienteSeleccionado == null"
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
            <div v-if="clienteSeleccionado != null">
              <v-app-bar dense flat color="white">
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
                <v-toolbar-title>{{
                  clienteSeleccionado.nombre
                }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="agregarDetalleDefault()">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-app-bar>

              <v-data-table
                :headers="headers"
                :items="pedido.detalle"
                hide-default-footer
              >
                <template v-slot:item="{ item }">
                  <detalle-pedido :detalle="item"></detalle-pedido>
                </template>
              </v-data-table>
            </div>
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
            <!--<iframe id="frame" src="/#/vistaPrevia" frameborder="0"></iframe>-->
          </v-card>
          <v-card-actions>
            <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-card-actions>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import DetallePedido from "../components/DetallePedido.vue";
import DetalleCliente from "../components/DetalleCliente.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations, mapState } = createNamespacedHelpers(
  "pedido"
);

export default {
  components: {
    DetallePedido,
    DetalleCliente,
  },
  data() {
    return {
      e1: 1,
      headers: [
        {
          text: "Estilo",
          align: "start",
          sortable: false,
          value: "estilo",
          width: 3,
        },
        {
          text: "Material",
          align: "start",
          sortable: false,
          value: "material",
        },
        {
          text: "Tallas",
          align: "start",
          sortable: false,
          value: "tallas",
        },
        {
          text: "Horma",
          align: "start",
          sortable: false,
          value: "horma",
          width: 3,
        },
        {
          text: "Forro",
          align: "start",
          sortable: false,
          value: "forro",
        },
        {
          text: "Suela",
          align: "start",
          sortable: false,
          value: "suela",
        },
        {
          text: "Subtotal",
          align: "center",
          sortable: false,
          value: "subtotal",
          width: 2,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["agregarDetalleDefault"]),
  },
  computed: {
    ...mapGetters(["clienteSeleccionado"]),
    ...mapState(["pedido"]),
  },
  created() {
    this.agregarDetalleDefault();
  },
};
</script>

<style scoped>
.paso-contenido {
  height: 320px;
}

#frame {
  width: 800px;
  height: 450px;
}
#frame {
  -ms-zoom: 0.75;
  -moz-transform: scale(0.7);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.7);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.7);
  -webkit-transform-origin: 0 0;
}
</style>