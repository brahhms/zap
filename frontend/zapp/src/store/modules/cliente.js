import axios from 'axios'
//import credentials from "./credentials.js";

axios.defaults.baseURL = "http://localhost:5984"


export default {
  namespaced: true,
  state: {
    clientes: [{
      _id: "4bce85615b36787c9bc135d3e501a07c",
      _rev: "1-54b4e0ad54dc69b2e1168ac51285db00",
      nombre: "Don Manuel",
      telefono: "",
      direccion: ""
    }]

  },
  mutations: {
    saveCliente(state,cliente){
      console.log("clienteGuardado:"+cliente.nombre);
    }
  },
  actions: {},
  getters: {
    clientes: state => state.clientes
  }
}