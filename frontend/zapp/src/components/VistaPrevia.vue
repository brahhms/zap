<template>
  <v-container>
    <v-div v-for="pedido in pedidos" :key="pedido.cliente">
      <v-row
        ><v-col>{{ pedido.cliente }}</v-col
        ><v-spacer></v-spacer
      ></v-row>
      <v-row>
        <v-col>
          <v-simple-table dense>
            <template v-slot:default>
              <tbody>
                <tr class="fila" v-for="detalle in pedido.detalle" :key="detalle.estilo">
                  <td>{{ detalle.estilo }}</td>
                  <td>{{ detalle.material.nombre }}</td>
                  <td>{{ detalle.material.color }}</td>
                  <td
                    v-for="detalleTallas in detalle.detalleTallas"
                    :key="detalleTallas.nombre"
                  >
                    {{ detalleTallas.cantidad }}/{{ detalleTallas.nombre }}
                  </td>
                  <td>{{ detalle.horma }}</td>
                  <td>{{ detalle.forro.nombre }}</td>
                  <td>{{ detalle.forro.color }}</td>
                  <td>{{ detalle.suela.nombre }}</td>
                  <td>{{ detalle.suela.color }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-div>
  </v-container>
</template>



<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      pedidos: [
        {
          cliente: "Don Manuel",
          fecha: "11-02-2020",
          detalle: [
            {
              estilo: "TA3",
              material: {
                nombre: "durasno",
                color: "negro",
              },
              detalleTallas: [
                {
                  nombre: "4",
                  cantidad: 0,
                },
                {
                  nombre: "5",
                  cantidad: 0,
                },
                {
                  nombre: "6",
                  cantidad: 0,
                },
                {
                  nombre: "7",
                  cantidad: 0,
                },
                {
                  nombre: "8",
                  cantidad: 0,
                },
                {
                  nombre: "9",
                  cantidad: 0,
                },
                {
                  nombre: "10",
                  cantidad: 0,
                },
              ],
              horma: "OP",
              forro: {
                nombre: "tricoth",
                color: "gris",
              },
              suela: {
                nombre: "1122",
                color: "negro",
              },
            },
          ],
        },
        {
          cliente: "Don Juan",
          fecha: "11-02-2020",
          detalle: [
            {
              estilo: "TA3",
              material: {
                nombre: "durasno",
                color: "negro",
              },
              detalleTallas: [
                {
                  nombre: "4",
                  cantidad: 0,
                },
                {
                  nombre: "5",
                  cantidad: 0,
                },
                {
                  nombre: "6",
                  cantidad: 0,
                },
                {
                  nombre: "7",
                  cantidad: 0,
                },
                {
                  nombre: "8",
                  cantidad: 0,
                },
                {
                  nombre: "9",
                  cantidad: 0,
                },
                {
                  nombre: "10",
                  cantidad: 0,
                },
              ],
              horma: "OP",
              forro: {
                nombre: "tricoth",
                color: "gris",
              },
              suela: {
                nombre: "1122",
                color: "negro",
              },
            },
          ],
        }
      ],
    };
  },
  methods: {
    ...mapMutations(["ocultarBarra"]),
    imprimir() {
      window.print();
    },
  },

  computed: {},
  created: function () {
    this.ocultarBarra();
  },
};
</script>

<style scoped>
.fila > td {
  font-size: 9px !important;
  padding: 0 !important;
}

@media print {
  @page {
    margin: 0;
    size: 8.46in 12.49in landscape;
  }
}
</style>