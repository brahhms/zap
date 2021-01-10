<template>
  <v-data-table dense :headers="headers" :items="[1]" hide-default-footer>
    <template v-slot:item>
      <tr>
        <td v-for="t in detalleTallas" :key="t.nombre">
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
import { mapState } from "vuex";
export default {
  props:["detalleTallas"],
  data() {
    return {

    };
  },
  methods: {},

  computed: {
    ...mapState(["tallas","pedido"]),
    headers() {
      let titulos = [];
      this.tallas.forEach((element) => {
        titulos.push({
          text: element.nombre,
          align: "center",
          sortable: false,
          value: "cuatro",
          width: 5,
          divider: true,
        });
      });

      return titulos;
    },
  },
  created: function () {
    console.log(this.pedido);
  },
};
</script>
