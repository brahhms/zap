<template>
  <v-container>
    <div v-for="pedido in pedidos" :key="pedido._id">
      <v-row
        ><v-col>{{ pedido.cliente.nombre }}</v-col
        ><v-spacer></v-spacer
      ></v-row>
      <v-row>
        <v-col>
          <v-simple-table dense>
            <template v-slot:default>
              <tbody>
                <tr
                  class="fila"
                  v-for="detalle in pedido.detalle"
                  :key="detalle.estilo._id"
                >
                  <td>{{ detalle.estilo.codigo }}</td>
                  <td>{{ detalle.detalleMaterial.material.nombre }}</td>
                  <td>{{ detalle.detalleMaterial.color }}</td>
                  <td
                    v-for="detalleTallas in detalle.detalleTallas"
                    :key="detalleTallas.talla._id"
                  >
                    {{ detalleTallas.cantidad }}/{{
                      detalleTallas.talla.nombre
                    }}
                  </td>
                  <td>{{ detalle.horma.nombre }}</td>
                  <td>{{ detalle.detalleForro.forro.nombre }}</td>
                  <td>{{ detalle.detalleForro.color }}</td>
                  <td>{{ detalle.detalleSuela.suela.nombre }}</td>
                  <td>{{ detalle.detalleSuela.color }}</td>
                  <td>
                    <v-chip>{{ detalle.subtotal }}</v-chip>
                  </td>
                </tr>
                <tr>
                  <td colspan="8"></td>
                  <td>total:</td>
                  <td>{{ total(pedido.detalle) }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <br />
    </div>
    <v-fab-transition>
      <v-btn color="primary" depressed dark fixed bottom right fab>
        <v-icon>mdi-printer</v-icon>
      </v-btn>
    </v-fab-transition>
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
  created() {
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