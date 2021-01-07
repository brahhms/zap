<template>
  <div class="nuevoPedido">
    <div>
      <v-data-table :headers="headers" :items="desserts">
        <template v-slot:item.cod="props">
          <v-edit-dialog
            :return-value.sync="props.item.cod"
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            {{ props.item.cod }}
            <template v-slot:input>
              <v-text-field
                v-model="props.item.cod"
                :rules="[max6chars]"
                label="Edit"
                single-line
                counter
              ></v-text-field>
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
            {{ props.item.material.nombre }} : {{ props.item.material.color }}
            <template v-slot:input>
              <v-text-field
                v-model="props.item.material.nombre"
                label="Edit"
                single-line
              ></v-text-field>
              <v-text-field
                v-model="props.item.material.color"
                label="Edit"
                single-line
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
        <template v-slot:item.forro="props">
          <v-edit-dialog
            :return-value.sync="props.item.forro"
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            {{ props.item.forro.nombre }} : {{ props.item.forro.color }}
            <template v-slot:input>
              <v-text-field
                v-model="props.item.forro.nombre"
                label="Edit"
                single-line
              ></v-text-field>
              <v-text-field
                v-model="props.item.forro.color"
                label="Edit"
                single-line
              ></v-text-field>
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
            <div>{{ props.item.suela.nombre }} : {{ props.item.suela.color }}</div>
            <template v-slot:input>
              <div class="mt-4 title">codigo</div>
              <v-text-field
                v-model="props.item.suela.nombre"
                :rules="[max6chars]"
                label="Edit"
                single-line
                counter
                autofocus
              ></v-text-field>
              <div class="mt-4 title">color</div>
              <v-text-field
                v-model="props.item.suela.color"
                :rules="[max6chars]"
                label="Edit"
                single-line
                counter
                autofocus
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
      </v-data-table>

      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
        {{ snackText }}

        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      snack: false,
      snackColor: "",
      snackText: "",
      max6chars: (v) => v.length <= 6 || "Codigo demasiado largo!",
      pagination: {},
      headers: [
        {
          text: "Codigo",
          align: "start",
          sortable: false,
          value: "cod",
        },
        {
          text: "Material",
          align: "start",
          sortable: false,
          value: "material",
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
        }

      ],
      desserts: [
        {
          cod: "RS",
          material: { nombre: "cemento", color: "azul" },
          horma: "op",
          forro: { nombre: "tricoth", color: "gris" },
          suela: { nombre: "1122", color: "gun" },

        },
        {
          cod: "TA",
          material: { nombre: "madera", color: "nieve" },
          horma: "op",
          forro: { nombre: "tricoth", color: "gris" },
          suela: { nombre: "1122", color: "gun" },
  
        },
        {
          cod: "T12",
          material: { nombre: "acero", color: "durazno" },
          horma: "op",
          forro: { nombre: "tricoth", color: "gris" },
          suela: { nombre: "1122", color: "gun" },
   
        },
        {
          cod: "SA378",
          material: { nombre: "tela", color: "amarillo" },
          horma: "op",
          forro: { nombre: "tricoth", color: "gris" },
          suela: { nombre: "1122", color: "gun" },
 
        },
        {
          cod: "RS54",
          material: { nombre: "cuero", color: "verde" },
          horma: "op",
          forro: { nombre: "tricoth", color: "gris" },
          suela: { nombre: "1122", color: "gun" },
   
        },
      ],
    };
  },
  methods: {
    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    close() {
      console.log("Dialog closed");
    },
  },
};
</script>
