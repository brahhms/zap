import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import pedidoStore from './modules/pedido'
import clienteStore from './modules/cliente'
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
    pedido: pedidoStore
  }
})