<template>
  <div class="estilo">
    <v-data-table :headers="headers" :items="items" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>ESTILOS</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Nuevo Estilo
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.codigo"
                        label="Codigo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.descripcion"
                        label="Descripcion"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-checkbox
                        v-model="editedItem.tacon"
                        label="Tacon"
                        color="primary"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-file-input
                        label="Imagen"
                        v-model="editedItem._attachments"
                        show-size
                        small-chips
                        truncate-length="9"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancelar
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Desea eliminar este estilo?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancelar</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >SI</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
      <template v-slot:item.tacon="{ item }">
        <v-simple-checkbox v-model="item.tacon" disabled></v-simple-checkbox>
      </template>
      <template v-slot:item.img="{ item }">
        <v-chip v-if="item._attachments"> imagen</v-chip>
        <span v-else>sin imagen</span>
      </template>
    </v-data-table>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
            :key="card.rev"
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>




<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("estilo");
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Codigo",
        align: "start",
        sortable: false,
        value: "codigo",
      },
      {
        text: "Descripcion",
        align: "start",
        sortable: false,
        value: "descripcion",
      },
      {
        text: "Tacon",
        align: "start",
        sortable: false,
        value: "tacon",
      },
      {
        text: "Imagen",
        align: "start",
        sortable: false,
        value: "img",
      },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      codigo: "",
      descripcion: "",
      tacon: false,
      _attachments: null,
    },
    defaultItem: {
      codigo: "",
      descripcion: "",
      tacon: false,
      _attachments: null,
    },
    cards: []
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo" : "Editar";
    },
    ...mapGetters(["estilos"]),
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.cargarDatos();
  },

  methods: {
    ...mapActions([
      "getEstilos",
      "updateEstilo",
      "saveEstilo",
      "deleteEstilo",
      "saveAttachment",
    ]),

    async cargarDatos() {
      await this.getEstilos();
      this.initialize();
    },
    initialize() {
      this.items = this.estilos.map((estilo) => {
        return {
          _id: estilo._id,
          _rev: estilo._rev,
          codigo: estilo.codigo,
          descripcion: estilo.descripcion,
          tacon: estilo.tacon,
          _attachments: estilo._attachments,
        };
      });
      this.cards = this.items.map((item) => {
        return {
          title: item.codigo,
          src: `http://localhost:5984/zapp-estilos/${item._id}/img`,
          flex: 3,
          rev:item._rev
        };
      });
    },

    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.deleteEstilo(this.editedItem);
      this.items.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        //editar
        await this.updateEstilo(this.editedItem);
        Object.assign(this.items[this.editedIndex], this.editedItem); 
      

      } else {
        //guardar
        await this.saveEstilo(this.editedItem);
        this.items.push(this.editedItem);        
      }
      this.close();
    },
  },
};
</script>