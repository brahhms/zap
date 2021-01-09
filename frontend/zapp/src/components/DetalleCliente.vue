<template>
  <v-card class="mx-auto" max-width="500" flat>
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-autocomplete
            auto-select-first
            clearable
            label="Cliente"
            :items="clientes"
            v-model="pedido.cliente"
          >
            <v-icon slot="prepend" color="primary"> mdi-account </v-icon>
            <template v-slot:item="data">
              {{ data.item.nombre }}
            </template>
            <template v-slot:selection="data">
              {{ data.item.nombre }}
            </template>
          </v-autocomplete>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            @click="
              step++;
              pedido.cliente = null;
            "
          >
            Crear Nuevo Cliente
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Nombre"
            v-model="cliente.nombre"
            type="text"
          ></v-text-field>
          <v-text-field
            label="Telefono"
            v-model="cliente.telefono"
            type="text"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            @click="
              step--;
              limpiarCliente();
            "
          >
            Regresar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" depressed @click="setCliente(cliente)">
            Crear
          </v-btn>
        </v-card-actions>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    step: 1,
    cliente: { nombre: "", telefono: "" },
  }),

  computed: {
    ...mapState(["pedido"]),
    clientes() {
      let clients = [
        { nombre: "juan", telefono: "89897654" },
        { nombre: "jose", telefono: "37872829" },
      ];

      return clients;
    },
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Selecciona un Cliente";
        case 2:
          return "Crea un Cliente Nuevo";
        default:
          return "";
      }
    },
  },
  methods: {
    ...mapMutations(["setCliente"]),
    limpiarCliente() {
      this.cliente = { nombre: "", telefono: "" };
      this.pedido.cliente = null;
    },
  },
};
</script>