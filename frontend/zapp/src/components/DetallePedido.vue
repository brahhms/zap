<template>
  <tr>
    <td>
      <v-edit-dialog>
        <span v-if="detalle.estilo != null">{{ detalle.estilo.codigo }}</span>
        <span v-else>-</span>
        <template v-slot:input>
          <v-container class="mt-3">
            <v-autocomplete
              v-model="detalle.estilo"
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
    </td>

    <td>
      <v-edit-dialog>
        <span v-if="detalle.detalleMaterial.material != null">{{
          detalle.detalleMaterial.material.nombre
        }}</span>
        <span v-else>-</span>
        <span v-if="detalle.detalleMaterial.color != null">
          {{ detalle.detalleMaterial.color }}</span
        >
        <template v-slot:input>
          <v-container class="mt-3">
            <v-autocomplete
              v-model="detalle.detalleMaterial.material"
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
              v-if="detalle.detalleMaterial.material != null"
              v-model="detalle.detalleMaterial.color"
              label="color"
              :items="detalle.detalleMaterial.material.colores"
              clearable
              dense
              filled
              rounded
            ></v-autocomplete>
          </v-container>
        </template>
      </v-edit-dialog>
    </td>

    <td>
      <v-dialog>
        <template v-slot:activator="{ on }">
          <v-container class="d-flex flex-row" v-on="on">
            <div
              class="pa-1"
              v-for="t in detalle.detalleTallas"
              :key="t.talla._id"
            >
              <v-chip color="primary" v-if="t.cantidad > 0"
                >{{ t.cantidad }}/{{ t.talla.nombre }}</v-chip
              >
            </div>
          </v-container>
        </template>
        <selector-talla :detalleTallas="detalle.detalleTallas"></selector-talla>
      </v-dialog>
    </td>

    <td>
      <v-edit-dialog>
        <span v-if="detalle.horma != null">{{ detalle.horma.nombre }}</span>
        <span v-else>-</span>
        <template v-slot:input>
          <v-container class="mt-3">
            <v-autocomplete
              v-model="detalle.horma"
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
    </td>

    <td>
      <v-edit-dialog>
        <span v-if="detalle.detalleForro.forro != null">{{
          detalle.detalleForro.forro.nombre
        }}</span>
        <span v-else>-</span>
        <span v-if="detalle.detalleForro.color != null">
          {{ detalle.detalleForro.color }}</span
        >
        <template v-slot:input>
          <v-container class="mt-3">
            <v-autocomplete
              v-model="detalle.detalleForro.forro"
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
              v-if="detalle.detalleForro.forro != null"
              v-model="detalle.detalleForro.color"
              label="color"
              :items="detalle.detalleForro.forro.colores"
              clearable
              dense
              filled
              rounded
            ></v-autocomplete>
          </v-container>
        </template>
      </v-edit-dialog>
    </td>

    <td>
      <v-edit-dialog>
        <span v-if="detalle.detalleSuela.suela != null">
          {{ detalle.detalleSuela.suela.nombre }}</span
        >
        <span v-else>-</span>
        <span v-if="detalle.detalleSuela.color != null">
          {{ detalle.detalleSuela.color }}</span
        >
        <template v-slot:input>
          <v-container class="mt-3">
            <v-autocomplete
              v-model="detalle.detalleSuela.suela"
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
              v-if="detalle.detalleSuela.suela != null"
              v-model="detalle.detalleSuela.color"
              label="color"
              :items="detalle.detalleSuela.suela.colores"
              clearable
              dense
              filled
              rounded
            ></v-autocomplete>
          </v-container>
        </template>
      </v-edit-dialog>
    </td>

    <td>
      <v-chip>{{ detalle.subtotal }}</v-chip>
    </td>
  </tr>
</template>

<script>
import SelectorTalla from "../components/SelectorTalla.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("pedido");

export default {
  props: ["detalle"],
  components: {
    SelectorTalla,
  },
  data: () => ({}),
  methods: {
    ...mapMutations(["agregarDetalleDefault"]),
  },

  watch: {
    "detalle.detalleTallas": {
      handler(newVal) {
        let subtotal = 0;
        newVal.forEach((talla) => {
          subtotal += talla.cantidad;
        });
        this.detalle.subtotal = subtotal;
      },
      deep: true,
    },
    "detalle.detalleMaterial.material"(newVal) {
      if (newVal != null)
        this.detalle.detalleMaterial.color = newVal.defaultColor;
    },
    "detalle.detalleMaterial.forro"(newVal) {
      if (newVal != null) this.detalle.detalleForro.color = newVal.defaultColor;
    },
    "detalle.detalleSuela.material"(newVal) {
      if (newVal != null) this.detalle.detalleSuela.color = newVal.defaultColor;
    },
  },
  computed: {
    ...mapGetters([
      "estilos",
      "materiales",
      "forros",
      "suelas",
      "hormas",
      "tallas",
    ]),
  },

  created() {},
};
</script>
