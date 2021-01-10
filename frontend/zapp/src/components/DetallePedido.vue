<template>
  <div>
    <v-app-bar dense flat color="white">
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-toolbar-title v-if="pedido.cliente != null">{{
        pedido.cliente.nombre
      }}</v-toolbar-title>
    </v-app-bar>

    <v-data-table :headers="headers" :items="pedido.detallePedido" hide-default-footer>
      <template v-slot:item.codigo="props">
        <v-edit-dialog
          :return-value.sync="props.item"
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          {{ props.item.estilo }}
          <template v-slot:input>
            <v-container class="mt-3">
              <v-autocomplete
                v-model="props.item.estilo"
                :rules="[max6chars]"
                label="codigo"
                :items="estilos"
                clearable
                dense
                filled
                rounded
              ></v-autocomplete>
            </v-container>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.material="props">
        <v-edit-dialog
          :return-value.sync="props.item.material"
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          {{ props.item.material.nombre }} - {{ props.item.material.color }}
          <template v-slot:input>
            <v-container class="mt-3">
              <v-autocomplete
                v-model="props.item.material.nombre"
                label="material"
                :items="materiales"
                clearable
                dense
                filled
                rounded
              ></v-autocomplete>
              <v-autocomplete
                v-model="props.item.material.color"
                label="color"
                :items="datos.materiales[props.item.material.nombre]"
                clearable
                dense
                filled
                rounded
              ></v-autocomplete>
            </v-container>
          </template>
        </v-edit-dialog>
      </template>

      <template v-slot:item.tallas="props">
        <v-dialog>
          <template v-slot:activator="{ on }">
            <v-container class="d-flex flex-row" v-on="on">
              <div
                class="pa-1"
                v-for="t in props.item.detalleTallas"
                :key="t.nombre"
              >
                <v-chip v-if="t.cantidad > 0"
                  >{{ t.cantidad }}/{{ t.nombre }}</v-chip
                >
              </div>
            </v-container>
          </template>
          <selector-talla
            :detalleTallas="props.item.detalleTallas"
          ></selector-talla>
        </v-dialog>
      </template>

      <template v-slot:item.forro="props">
        <v-edit-dialog
          :return-value.sync="props.item.forro"
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          {{ props.item.forro.nombre }} - {{ props.item.forro.color }}
          <template v-slot:input>
            <v-container class="mt-3">
              <v-autocomplete
                v-model="props.item.forro.nombre"
                label="forro"
                :items="forros"
                clearable
                dense
                filled
                rounded
              ></v-autocomplete>
              <v-autocomplete
                v-model="props.item.forro.color"
                label="color"
                :items="datos.forros[props.item.forro.nombre]"
                clearable
                dense
                filled
                rounded
              ></v-autocomplete>
            </v-container>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.suela="props">
        <v-edit-dialog
          :return-value.sync="props.item.suela"
          large
          persistent
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>
            {{ props.item.suela.nombre }} - {{ props.item.suela.color }}
          </div>
          <template v-slot:input>
            <v-container class="mt-3">
              <v-autocomplete
                v-model="props.item.suela.nombre"
                label="codigo"
                :items="suelas"
                clearable
                dense
                filled
                rounded
              ></v-autocomplete>
              <v-autocomplete
                v-model="props.item.suela.color"
                label="color"
                :items="datos.suelas[props.item.suela.nombre]"
                clearable
                dense
                filled
                rounded
              ></v-autocomplete>
            </v-container>
          </template>
        </v-edit-dialog>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SelectorTalla from "../components/SelectorTalla.vue";
export default {
  components: { SelectorTalla },
  data: () => ({
    max6chars: (v) => v.length <= 6 || "Codigo demasiado largo!",
    pagination: {},
    headers: [
      {
        text: "Codigo",
        align: "start",
        sortable: false,
        value: "codigo",
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
    ],

    datos: {
      materiales: {
        durazno: ["negro", "uva", "beige", "gena", "rosa vieja", "azul"],
        cuero: ["negro", "cafe"],
      },
      forros: {
        tricoth: ["negro", "gris", "beige"],
        tela: ["negro", "cafe"],
      },
      suelas: {
        1122: ["gun", "negro"],
        tacon: ["negro", "cafe"],
      },
    },
  }),
  methods: {
    save() {},
    cancel() {},
    open() {},
    close() {
      console.log("Dialog closed");
    },
  },

  computed: {
    ...mapState(["pedido","estilos"]),
    materiales() {
      return Object.keys(this.datos.materiales);
    },
    forros() {
      return Object.keys(this.datos.forros);
    },
    suelas() {
      return Object.keys(this.datos.suelas);
    },
  },

  created: function () {},
};
</script>
