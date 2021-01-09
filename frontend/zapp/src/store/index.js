import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pedido: {
      cliente: null,
      detallePedido: [
        {
          cod: "RS",
          material: { nombre: "cemento", color: "azul" },
          tallas: [
            {
              cuatro: 4,
              cinco: 0,
              seis: 0,
              siete: 4,
              ocho: 5,
              nueve: 0,
              diez: 0,
            },
          ],
          horma: "op",
          forro: { nombre: "tricoth", color: "gris" },
          suela: { nombre: "1122", color: "gun" },
        },
        {
          cod: "TA",
          material: { nombre: "madera", color: "nieve" },
          tallas: [
            {
              cuatro: 4,
              cinco: 0,
              seis: 0,
              siete: 4,
              ocho: 5,
              nueve: 0,
              diez: 0,
            },
          ],
          horma: "op",
          forro: { nombre: "tricoth", color: "gris" },
          suela: { nombre: "1122", color: "gun" },
        },
        {
          cod: "T12",
          material: { nombre: "acero", color: "durazno" },
          tallas: [
            {
              cuatro: 4,
              cinco: 0,
              seis: 0,
              siete: 4,
              ocho: 5,
              nueve: 0,
              diez: 0,
            },
          ],
          horma: "op",
          forro: { nombre: "tricoth", color: "gris" },
          suela: { nombre: "1122", color: "gun" },
        },
        {
          cod: "SA378",
          material: { nombre: "tela", color: "amarillo" },
          tallas: [
            {
              cuatro: 4,
              cinco: 0,
              seis: 0,
              siete: 4,
              ocho: 5,
              nueve: 0,
              diez: 0,
            },
          ],
          horma: "op",
          forro: { nombre: "tricoth", color: "gris" },
          suela: { nombre: "1122", color: "gun" },
        },
        {
          cod: "RS54",
          material: { nombre: "cuero", color: "verde" },
          tallas: [
            {
              cuatro: 4,
              cinco: 0,
              seis: 0,
              siete: 4,
              ocho: 5,
              nueve: 0,
              diez: 0,
            },
          ],
          horma: "op",
          forro: { nombre: "tricoth", color: "gris" },
          suela: { nombre: "1122", color: "gun" },
        },
      ],
    },
  },
  mutations: {
    setCliente(state,cliente){
      state.pedido.cliente = cliente;
    }
  },
  actions: {
  },
  modules: {
  }
})
