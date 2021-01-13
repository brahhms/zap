<template>
  <v-data-table dense :headers="headers" :items="[1]" hide-default-footer>
    <template v-slot:item>
      <tr>
        <td v-for="t in detalleTallas" :key="t.talla._id">
          <v-text-field
            v-model.lazy.number="t.cantidad"
            flat
            hide-details
            dense
            :value="t.cantidad"
          ></v-text-field>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>



<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("pedido");

export default {
  props: ["detalleTallas"],
  data() {
    return {};
  },
  methods: {
  },

  computed: {
    ...mapGetters(["tallas"]),
    headers() {
      let lista = [];
      this.tallas.forEach((element) => {
        lista.push({
          text: element.nombre,
          align: "center",
          sortable: false,
          value: element.nombre,
          width: 5,
          divider: true,
        });
      });

      return lista;
    },
  },
  created() {},
};
</script>
