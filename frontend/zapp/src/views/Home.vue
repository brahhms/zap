<template>
  <div class="home">
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-card  class="tarjeta">
              <v-btn color="primary" depressed min-height="100%" block class="opcion" text :to="{ name: 'NuevoPedido' }">Nuevo Pedido</v-btn>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="tarjeta">
              <v-btn min-height="100%" block text :to="{ name: 'MantenimientoEstilo' }">Estilos</v-btn>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="tarjeta">
              <v-btn min-height="100%" block text :to="{ name: 'MantenimientoMaterial' }"
                >Materiales</v-btn
              >
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="tarjeta">
              <v-btn min-height="100%" block text :to="{ name: 'MantenimientoForro' }">Forros</v-btn>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="tarjeta">
              <v-btn min-height="100%" block text :to="{ name: 'MantenimientoSuela' }">Suelas</v-btn>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="tarjeta">
              <v-btn min-height="100%" block text :to="{ name: 'MantenimientoCliente' }">Clientes</v-btn>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="tarjeta">
              <v-btn min-height="100%" block text :to="{ name: 'Pedidos' }">Pedidos</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.tarjeta {
  height: 150px;
}


</style>