<template>
  <div>
    <v-tabs vertical>
      <v-tab>
        <v-icon left> mdi-format-columns </v-icon>
        Pedidos
      </v-tab>
      <v-tab>
        <v-icon left>mdi-clipboard-check </v-icon>
        Lista de Compras
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <draggable v-model="pedidos" ghost-class="ghost" @end="onEnd">
              <transition-group type="transition" name="flip-list">
                <div
                  class="pedido sorteable"
                  v-for="pedido in pedidos"
                  :key="pedido._id"
                >
                  <v-row>
                    <v-col style="font-size: 14px; font-weight: bold">
                      {{ pedido.cliente.nombre }}
                    </v-col>
                    <v-spacer></v-spacer>
                  </v-row>
                  <v-row>
                    <v-col>
                      <table style="width: 550px">
                        <tr>
                          <th colspan="9"></th>
                          <th style="font-weight: bold">subtotal</th>
                        </tr>

                        <tr
                          class="fila"
                          v-for="(detalle, index) in pedido.detalle"
                          :key="index"
                        >
                          <td>{{ detalle.estilo.codigo }}</td>
                          <td>
                            {{ detalle.detalleMaterial.material.nombre }}
                          </td>
                          <td>{{ detalle.detalleMaterial.color }}</td>
                          <td>
                            <table>
                              <tr>
                                <td
                                  cols="1"
                                  v-for="detalleTallas in detalle.detalleTallas"
                                  :key="detalleTallas.talla._id"
                                >
                                  <span v-show="detalleTallas.cantidad > 0"
                                    >{{ detalleTallas.cantidad }}/{{
                                      detalleTallas.talla.nombre
                                    }}
                                  </span>
                                  <span v-if="detalleTallas.cantidad > 0"
                                    >,
                                  </span>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td>{{ detalle.horma.nombre }}</td>
                          <td>{{ detalle.detalleForro.forro.nombre }}</td>
                          <td>{{ detalle.detalleForro.color }}</td>
                          <td>{{ detalle.detalleSuela.suela.nombre }}</td>
                          <td>{{ detalle.detalleSuela.color }}</td>
                          <td>
                            {{ detalle.subtotal }}
                          </td>
                        </tr>
                        <tr class="fila">
                          <td colspan="8"></td>
                          <td style="font-weight: bold">total:</td>
                          <td>{{ total(pedido.detalle) }}</td>
                        </tr>
                      </table>
                    </v-col>
                  </v-row>
                  <br />
                </div>
              </transition-group>
            </draggable>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
              egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
              tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam
              libero, non adipiscing dolor urna a orci. Curabitur ligula sapien,
              tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed
              turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque
              egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
              tortor. Proin viverra, ligula sit amet ultrices semper, ligula
              arcu tristique sapien, a accumsan nisi mauris ac eros. In hac
              habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra
              condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
              quis gravida magna mi a libero. Nam commodo suscipit quam. In
              consectetuer turpis ut velit. Sed cursus turpis vitae tortor.
              Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt
              libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum
              odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In
              dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed,
              iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>


<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  props: ["pedidos"],
  data: () => ({
    oldIndex: "",
    newIndex: "",
  }),
  mounted() {

  },
  methods: {

    onEnd(evt) {
      console.log(evt);
      this.oldIndex = evt.oldIndex;
      this.newIndex = evt.newIndex;
    },
    total(detalle) {
      let sum = 0;

      detalle.forEach((item) => {
        sum += item.subtotal;
      });
      return sum;
    },
  },
  computed: {

  },
};
</script>

<style scoped>
.sortable {
  cursor: move;
}
.sortable-drag {
  opacity: 0;
}

.flip-list-move {
  transition: transform 0.5s;
}

.ghost {
  border-radius: 4px;
  padding-left: 5px;
  border-left: 15px solid rgba(0, 183, 255, 0.2);
  box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.14);
  opacity: 0.7;
}
</style>