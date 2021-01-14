import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import pedidoStore from './modules/pedido'
import clienteStore from './modules/cliente'
import estiloStore from './modules/estilo'
import materialStore from './modules/material'
import tallaStore from './modules/talla'
import forroStore from './modules/forro'
import suelaStore from './modules/suela'
import hormaStore from './modules/horma'

//import credentials from "./modules/credentials";

Vue.use(Vuex)
axios.defaults.baseURL = "http://localhost:5984"

export default new Vuex.Store({
  state: {
    pedidos: null,
    showBar: true
  },
  mutations: {
    ocultarBarra(state) {
      state.showBar = false;
    }
  },
  actions: {},
  modules: {
    cliente: clienteStore,
    pedido: pedidoStore,
    estilo: estiloStore,
    material: materialStore,
    talla: tallaStore,
    forro: forroStore,
    suela: suelaStore,
    horma: hormaStore,
  }
})