<template>
  <div v-if="clienteSeleccionado != null">
    <v-app-bar dense flat color="white">
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-toolbar-title>{{ clienteSeleccionado.nombre }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="agregarDetalles(1)">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-data-table
      :headers="headers"
      :items="pedido.detalle"
      hide-default-footer
    >
      <template v-slot:item.estilo="{ item }">
        <v-edit-dialog>
          <span v-if="item.estilo != null">{{ item.estilo.codigo }}</span>
          <span v-else>-</span>
          <template v-slot:input>
            <v-container class="mt-3">
              <v-autocomplete
                v-model="item.estilo"
                label="codigo"
                :items="estilos"
                clearable
                dense
                filled
                rounded
              >
                <template v-slot:item="{ item }">
                  {{ item.codigo }}
                </template>
                <template v-slot:selection="{ item }">
                  {{ item.codigo }}
                </template>
              </v-autocomplete>
            </v-container>
          </template>
        </v-edit-dialog>
      </template>

      <template v-slot:item.material="{ item }">
        <v-edit-dialog>
          <span v-if="item.detalleMaterial.material != null">{{
            item.detalleMaterial.material.nombre
          }}</span>
          <span v-else>-</span>
          <span v-if="item.detalleMaterial.color != null">
            {{ item.detalleMaterial.color }}</span
          >
          <template v-slot:input>
            <v-container class="mt-3">
              <v-autocomplete
                v-model="item.detalleMaterial.material"
                label="material"
                :items="materiales"
                clearable
                dense
                filled
                rounded
              >
                <template v-slot:item="{ item }">
                  {{ item.nombre }}
                </template>
                <template v-slot:selection="{ item }">
                  {{ item.nombre }}
                </template>
              </v-autocomplete>
              <v-autocomplete
                v-if="item.detalleMaterial.material != null"
                v-model="item.detalleMaterial.color"
                label="color"
                :items="item.detalleMaterial.material.colores"
                clearable
                dense
                filled
                rounded     
              ></v-autocomplete>
            </v-container>
          </template>
        </v-edit-dialog>
      </template>

      <template v-slot:item.tallas="{ item }">
        <v-dialog>
          <template v-slot:activator="{ on }">
            <v-container class="d-flex flex-row" v-on="on">
              <div
                class="pa-1"
                v-for="t in item.detalleTallas"
                :key="t.talla._id"
              >
                <v-chip color="primary" v-if="t.cantidad > 0"
                  >{{ t.cantidad }}/{{ t.talla.nombre }}</v-chip
                >
              </div>
            </v-container>
          </template>
          <selector-talla :detalleTallas="item.detalleTallas" ></selector-talla>
        </v-dialog>
      </template>

      <template v-slot:item.horma="{ item }">
        <v-edit-dialog>
          <span v-if="item.horma != null">{{ item.horma.nombre }}</span>
          <span v-else>-</span>
          <template v-slot:input>
            <v-container class="mt-3">
              <v-autocomplete
                v-model="item.horma"
                label="horma"
                :items="hormas"
                clearable
                dense
                filled
                rounded
              >
                <template v-slot:item="{ item }">
                  {{ item.nombre }}
                </template>
                <template v-slot:selection="{ item }">
                  {{ item.nombre }}
                </template>
              </v-autocomplete>
            </v-container>
          </template>
        </v-edit-dialog>
      </template>

      <template v-slot:item.forro="{ item }">
        <v-edit-dialog>
          <span v-if="item.detalleForro.forro != null">{{
            item.detalleForro.forro.nombre
          }}</span>
          <span v-else>-</span>
          <span v-if="item.detalleForro.color != null">
            {{ item.detalleForro.color }}</span
          >
          <template v-slot:input>
            <v-container class="mt-3">
              <v-autocomplete
                v-model="item.detalleForro.forro"
                label="forro"
                :items="forros"
                clearable
                dense
                filled
                rounded
              >
                <template v-slot:item="{ item }">
                  {{ item.nombre }}
                </template>
                <template v-slot:selection="{ item }">
                  {{ item.nombre }}
                </template>
              </v-autocomplete>
              <v-autocomplete
                v-if="item.detalleForro.forro != null"
                v-model="item.detalleForro.color"
                label="color"
                :items="item.detalleForro.forro.colores"
                clearable
                dense
                filled
                rounded
              ></v-autocomplete>
            </v-container>
          </template>
        </v-edit-dialog>
      </template>

      <template v-slot:item.suela="{ item }">
        <v-edit-dialog>
          <span v-if="item.detalleSuela.suela != null">
            {{ item.detalleSuela.suela.nombre }}</span
          >
          <span v-else>-</span>
          <span v-if="item.detalleSuela.color != null">
            {{ item.detalleSuela.color }}</span
          >
          <template v-slot:input>
            <v-container class="mt-3">
              <v-autocomplete
                v-model="item.detalleSuela.suela"
                label="suela"
                :items="suelas"
                clearable
                dense
                filled
                rounded
              >
                <template v-slot:item="{ item }">
                  {{ item.nombre }}
                </template>
                <template v-slot:selection="{ item }">
                  {{ item.nombre }}
                </template>
              </v-autocomplete>
              <v-autocomplete
                v-if="item.detalleSuela.suela != null"
                v-model="item.detalleSuela.color"
                label="color"
                :items="item.detalleSuela.suela.colores"
                clearable
                dense
                filled
                rounded
              ></v-autocomplete>
            </v-container>
          </template>
        </v-edit-dialog>
      </template>

      <template v-slot:item.subtotal="{ item }">
        <v-chip>{{ item.subtotal }}</v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import SelectorTalla from "../components/SelectorTalla.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("pedido");

export default {
  components: {
    SelectorTalla,
  },
  data: () => ({
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
  }),
  methods: {
    ...mapMutations(["agregarDetalles"]),
  },

  computed: {
    ...mapGetters([
      "clienteSeleccionado",
      "pedido",
      "estilos",
      "materiales",
      "forros",
      "suelas",
      "hormas",
    ]),
  },

  created() {
    this.agregarDetalles(1);
  },
};
</script>
