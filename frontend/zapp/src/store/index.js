import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pedido: {
      cliente: null,
      detallePedido: null,
    },
    tallas: [{
      nombre: "4"
    }, {
      nombre: "5"
    }, {
      nombre: "6"
    }, {
      nombre: "7"
    }, {
      nombre: "8"
    }, {
      nombre: "9"
    }, {
      nombre: "10"
    }],
    estilos:["TA3", "TA2", "TA6", "R101", "R102", "R70"],

  },
  mutations: {

    crearDetallePedido(state, cantidadPedidos) {
      state.pedido.detallePedido = [];

      for (let i = 0; i < cantidadPedidos; i++) {
        state.pedido.detallePedido.push({
          estilo: "EE",
          material: {
            nombre: "ejMaterial",
            color: "ejColorMaterial"
          },
          detalleTallas: [{
              nombre: "4",
              cantidad: 0
            },
            {
              nombre: "5",
              cantidad: 0
            },
            {
              nombre: "6",
              cantidad: 0
            },
            {
              nombre: "7",
              cantidad: 0
            },
            {
              nombre: "8",
              cantidad: 0
            },
            {
              nombre: "9",
              cantidad: 0
            },
            {
              nombre: "10",
              cantidad: 0
            }

          ],
          horma: "ejHorma",
          forro: {
            nombre: "ejForro",
            color: "ejColorForro"
          },
          suela: {
            nombre: "ejSuela",
            color: "ejColorSuela"
          },
        });
      }

    },
  },
  actions: {},
  modules: {}
})