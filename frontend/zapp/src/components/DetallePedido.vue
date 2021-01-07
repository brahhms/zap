<template>
  <v-data-table :headers="headers" :items="detallePedido">
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
          <v-autocomplete
            v-model="props.item.cod"
            :rules="[max6chars]"
            label="codigo"
            :items="datos.cods"
            clearable
            dense
            filled
            rounded
          ></v-autocomplete>
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
          <v-autocomplete
            v-model="props.item.material.nombre"
            label="material"
            :items="materiales"
            clearable
            dense
            filled
            rounded
          ></v-autocomplete>
          <v-autocomplete
            v-model="props.item.material.color"
            label="color"
            :items="datos.materiales[props.item.material.nombre]"
            clearable
            dense
            filled
            rounded
          ></v-autocomplete>
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
          <v-autocomplete
            v-model="props.item.forro.nombre"
            label="forro"
            :items="forros"
            clearable
            dense
            filled
            rounded
          ></v-autocomplete>
          <v-autocomplete
            v-model="props.item.forro.color"
            label="color"
            :items="datos.forros[props.item.forro.nombre]"
            clearable
            dense
            filled
            rounded
          ></v-autocomplete>
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
          <v-autocomplete
            v-model="props.item.suela.nombre"
            label="codigo"
            :items="suelas"
            clearable
            dense
            filled
            rounded
          ></v-autocomplete>
          <v-autocomplete
            v-model="props.item.suela.color"
            label="color"
            :items="datos.suelas[props.item.suela.nombre]"
            clearable
            dense
            filled
            rounded
          ></v-autocomplete>
        </template>
      </v-edit-dialog>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
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
      },
    ],

    datos: {
      cods: ["TA3", "TA2", "TA6", "R101", "R102", "R70"],
      materiales: {
        durazno: ["negro", "uva", "beige", "gena", "rosa vieja", "azul"],
        cuero: ["negro", "cafe"],
      },
      forros: {
        tricoth: ["negro", "gris", "beige"],
        tela: ["negro", "cafe"],
      },
      suelas: {
        1122: ["gun", "negro"],
        tacon: ["negro", "cafe"],
      },
    },

    detallePedido: [
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
  }),
  methods: {
    save() {},
    cancel() {},
    open() {},
    close() {
      console.log("Dialog closed");
    },
  },

  computed: {
    materiales() {
      return Object.keys(this.datos.materiales);
    },
    forros() {
      return Object.keys(this.datos.forros);
    },
    suelas() {
      return Object.keys(this.datos.suelas);
    },
  },
};
</script>
