<template>
  <div class="nuevoPedido">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" editable>
          Agregar Cliente
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          Agregar Detalle de Pedido
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Vista Previa </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12 paso-contenido" flat :loading="loading1">
            <detalle-cliente v-if="clientes != null"></detalle-cliente>
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
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-data-table
                  :headers="headers"
                  :items="detalles"
                  hide-default-footer
                >
                  <template v-slot:item="{ item }">
                    <detalle-pedido
                      :detalle="item"
                      :estilos="estilos"
                      :materiales="materiales"
                      :tallas="tallas"
                      :forros="forros"
                      :suelas="suelas"
                      :hormas="hormas"
                    ></detalle-pedido>
                  </template>
                </v-data-table>
              </v-form>
            </div>
          </v-card>
          <v-card-actions>
            <v-btn color="primary" depressed x-large @click="e1--">
              Regresar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              depressed
              x-large
              @click=" 
                guardarPedido();
              "
              :disabled="!valid"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-12 paso-contenido text-center"
            color="grey lighten-1"
          >
            <iframe id="frame" src="/#/pedidos" frameborder="0"></iframe>
          </v-card>
          <v-card-actions>
            <v-btn color="primary" depressed x-large @click="e1 = 1">
              Agregar otro pedido
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout">
      {{ snackbar.msj }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import DetallePedido from "../components/DetallePedido.vue";
import DetalleCliente from "../components/DetalleCliente.vue";
import { createNamespacedHelpers, mapState } from "vuex";
const { mapGetters, mapMutations, mapActions } = createNamespacedHelpers(
  "pedido"
);

export default {
  components: {
    DetallePedido,
    DetalleCliente,
  },
  data() {
    return {
      valid: false,
      e1: 1,
      loading1: true,
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
    ...mapActions(["getData", "savePedido"]),
    ...mapMutations(["pushDetalle", "setDetalle"]),
    async loadData() {
      console.log("Vorher");
      await this.getData();
      this.loading1 = false;
      console.log("Nachher");
      this.setDetalle([]);
      this.agregarDetalleDefault();
    },

    agregarDetalleDefault() {
      let detalleDefault = {
        estilo: null,
        detalleMaterial: {
          material: null,
          color: null,
        },
        detalleTallas: null,
        horma: null,
        detalleForro: {
          forro: null,
          color: null,
        },
        detalleSuela: {
          suela: null,
          color: null,
        },
        subtotal: 0,
      };
      detalleDefault.detalleTallas = this.tallas.map((t) => {
        return {
          talla: t,
          cantidad: 0,
        };
      });
      detalleDefault.estilo = this.estilos[0];
      detalleDefault.detalleMaterial.material = this.materiales[0];
      detalleDefault.detalleForro.forro = this.forros[0];
      detalleDefault.detalleSuela.suela = this.suelas[0];
      detalleDefault.horma = this.hormas[0];

      this.pushDetalle(detalleDefault);
    },

    async guardarPedido() {
      this.validate();
      if (!this.valid) return;


      const res = await this.savePedido();
      if (res.data.ok) {
        this.mostrarMsj("Pedido guardado!");
        this.e1++;
      }
    },
    mostrarMsj(msj) {
      this.snackbar.msj = msj;
      this.snackbar.show = true;
    },

    validate() {
      this.valid = this.$refs.form.validate();
      this.detalles.forEach((detalle) => {
        if (detalle.subtotal <= 0) {
          this.valid = false;
          this.mostrarMsj("Agregue almenos una talla");
          return;
        }
      });
    },
  },

  computed: {
    ...mapState(["snackbar"]),
    ...mapGetters([
      "clienteSeleccionado",
      "detalles",
      "estilos",
      "materiales",
      "tallas",
      "forros",
      "suelas",
      "hormas",
      "clientes",
    ]),
  },
  created() {
    this.loadData();
  },
};
</script>

<style scoped>
.paso-contenido {
  height: 320px;
}

#frame {
  width: 1200px;
  height: 530px;
}
#frame {
  -ms-zoom: 0.6;
  -moz-transform: scale(0.6);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.6);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.6);
  -webkit-transform-origin: 0 0;
}
</style>