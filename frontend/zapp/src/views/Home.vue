<template>
  <div class="home">
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-card  class="tarjeta">
              <v-btn min-height="100%" block class="opcion" text :to="{ name: 'NuevoPedido' }">Nuevo Pedido</v-btn>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="tarjeta">
              <v-btn min-height="100%" block text :to="{ name: 'MantenimientoEstilo' }">Estilos</v-btn>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="tarjeta">
              <v-btn min-height="100%" block text :to="{ name: 'AgregarMaterial' }"
                >Agregar Material</v-btn
              >
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="tarjeta">
              <v-btn min-height="100%" block text :to="{ name: 'AgregarForro' }">Agregar Forro</v-btn>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="tarjeta">
              <v-btn min-height="100%" block text :to="{ name: 'AgregarSuela' }">Agregar Suela</v-btn>
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