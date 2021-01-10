<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          :items="detalleTallas"
          v-model="tallasSeleccionadas"
          dense
          chips
          multiple
          clearable
        >
          <template v-slot:selection="data">
            <v-edit-dialog>
              <v-chip
                v-bind="data.attrs"
                :input-value="data.selected"
                close
                @click:close="remove(data.item)"
                >{{ data.item.cantidad }}/{{ data.item.nombre }}</v-chip
              >
              <template v-slot:input>
                <v-container class="mt-3">
                  <v-text-field
                    label="Cantidad"
                    clearable
                    dense
                    filled
                    rounded
                  ></v-text-field>
                </v-container>
              </template>
            </v-edit-dialog>
          </template>

          <template v-slot:item="data"> Talla {{ data.item.nombre }} </template>
        </v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      tallasSeleccionadas: [],
      detalleTallas: [
        { nombre: "4", cantidad: 1 },
        { nombre: "5", cantidad: 1 },
        { nombre: "6", cantidad: 1 },
        { nombre: "7", cantidad: 1 },
      ],
    };
  },
  computed: {
    tallas() {
      let lista = this.items.map(function (x) {
        return x;
      });

      return lista;
    },
  },
  methods: {
    remove(item) {
      const index = this.tallasSeleccionadas.indexOf(
        this.tallasSeleccionadas.find(
          (element) => element.nombre == item.nombre
        )
      );

      if (index >= 0) this.tallasSeleccionadas.splice(index, 1);
    },
  },
};
</script>