<template>
  <v-data-table
    dense
    class="tabla"
    :headers="headers"
    :items="tallas"
    hide-default-footer
  >
    <!--
    <template v-slot:item="{ item }">
      <tr>
        <td class="celda">
          <v-text-field
            solo
            flat
            hide-details
            dense
            :value="item.cuatro"
          ></v-text-field>
        </td>
        <td class="celda">
          <v-text-field
            solo
            flat
            hide-details
            dense
            :value="item.cinco"
          ></v-text-field>
        </td>
        <td class="celda">
          <v-text-field
            solo
            flat
            hide-details
            dense
            :value="item.seis"
          ></v-text-field>
        </td>
        <td class="celda">
          <v-text-field
            solo
            flat
            hide-details
            dense
            :value="item.siete"
          ></v-text-field>
        </td>
        <td class="celda">
          <v-text-field
            solo
            flat
            hide-details
            dense
            :value="item.ocho"
          ></v-text-field>
        </td>
        <td class="celda">
          <v-text-field
            solo
            flat
            hide-details
            dense
            :value="item.nueve"
          ></v-text-field>
        </td>
      </tr>
    </template>
    -->
    <template v-slot:item.diez="{ item }">
      <v-text-field
            solo
            flat
            hide-details
            dense
            :value="item.nueve"
          ></v-text-field>
    </template>
  </v-data-table>
</template>



<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "4",
          align: "center",
          sortable: false,
          value: "cuatro",
          width: 5,
          divider: true,
        },
        {
          text: "5",
          align: "center",
          sortable: false,
          value: "cinco",
          width: 5,
          divider: true,
        },
        {
          text: "6",
          align: "center",
          sortable: false,
          value: "seis",
          width: 5,
          divider: true,
        },
        {
          text: "7",
          align: "center",
          sortable: false,
          value: "siete",
          width: 5,
          divider: true,
        },
        {
          text: "8",
          align: "center",
          sortable: false,
          value: "ocho",
          width: 5,
          divider: true,
        },
        {
          text: "9",
          align: "center",
          sortable: false,
          value: "nueve",
          width: 5,
          divider: true,
        },
        {
          text: "10",
          align: "center",
          sortable: false,
          value: "diez",
          width: 5,
          divider: true,
        },
      ],
      tallas: [
        {
          cuatro: 4,
          cinco: 0,
          seis: 0,
          siete: 4,
          ocho: 5,
          nueve: 0,
          diez: 0,
        },
      ],
    };
  },

  computed: {},
};
</script>

<style  scoped>
.celda {
  padding: 0 !important;
  margin: 0 !important;
}

.input-numero .inputPrice input[type="number"] {
  -moz-appearance: textfield;
}
.input-numero input::-webkit-outer-spin-button,
.input-numero input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
