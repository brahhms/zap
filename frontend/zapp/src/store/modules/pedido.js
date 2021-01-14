import axios from 'axios'
//import credentials from "./credentials.js";

axios.defaults.baseURL = "http://localhost:5984"

export default {
  namespaced: true,
  state: {
    pedido: {
      cliente: null,
      fecha: null,
      detalle: []
    },

    //database

  },
  mutations: {
    setCliente(state, cliente) {
      state.pedido.cliente = cliente;
      if (cliente != null) {
        console.log("cliente seleccionado en pedido:" + state.pedido.cliente.nombre);
      } else {
        console.log("no ha seleccionado ningun cliente");
      }

    },
    setDetalle(state,detalle){
      state.pedido.detalle = detalle;
    }

  },
  actions: {},
  getters: {
    pedido: state => state.pedido,
    clienteSeleccionado: state => state.pedido.cliente,
    //database
  }

}