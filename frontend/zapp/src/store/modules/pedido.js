import axios from 'axios'
import credentials from "./credentials.js";

const url = "http://localhost:5984/zapp-pedidos/";

async function getAll() {
  const response = await axios.post(`${url}_find`, {
      "selector": {}
  }, credentials.authentication);
  return response;
}




export default {
  namespaced: true,
  state: {
    pedido: {
      cliente: null,
      fecha: null,
      detalle: []
    },

    //database
    pedidos: null,
    estilos:null,
    materiales:null,
    tallas:null,
    forros:null,
    suelas:null,
    hormas:null,
    clientes:null

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
    setDetalle(state, detalle) {
      state.pedido.detalle = detalle;
    },
    pushDetalle(state, detalle) {
      state.pedido.detalle.push(detalle);
    },
    setPedidos(state,pedidos){
      state.pedidos = pedidos;
    },
    setData(state,data){
      state.estilos = data[0].data.docs;
      state.materiales = data[1].data.docs;
      state.tallas = data[2].data.docs;
      state.forros = data[3].data.docs;
      state.suelas = data[4].data.docs;
      state.hormas = data[5].data.docs;
      state.clientes = data[6].data.docs;
    }

  },
  actions: {
    async getPedidos({
      commit
    }) {
      const res = await axios.post(`${url}_find`, {
        "selector": {}
      }, credentials.authentication);
      commit('setPedidos', res.data.docs);
    },
    async getData({commit}){
      const data = await axios.all([
        axios.post(`http://localhost:5984/zapp-estilos/_find`, { "selector": {}}, credentials.authentication),
        axios.post('http://localhost:5984/zapp-materiales/_find', { "selector": {}}, credentials.authentication),
        axios.post('http://localhost:5984/zapp-tallas/_find', { "selector": {}}, credentials.authentication),
        axios.post('http://localhost:5984/zapp-forros/_find', { "selector": {}}, credentials.authentication),
        axios.post('http://localhost:5984/zapp-suelas/_find', { "selector": {}}, credentials.authentication),
        axios.post('http://localhost:5984/zapp-hormas/_find', { "selector": {}}, credentials.authentication),
        axios.post('http://localhost:5984/zapp-clientes/_find',{ "selector": {}}, credentials.authentication)
      ]);
      commit('setData', data);
    },
    async savePedido({commit,state}) {
      const res = await axios.post(`${url}`, state.pedido, {
        "auth": credentials.authentication.auth,
        "headers": credentials.authentication.headers,
      }, credentials.authentication);

      const response = await getAll();
      commit('setPedidos', response.data.docs);
      return res;
    },
  },
  getters: {
    detalles: state => state.pedido.detalle,
    clienteSeleccionado: state => state.pedido.cliente,
    pedidos: state => state.pedidos,

    estilos: state => state.estilos,
    materiales: state => state.materiales,
    tallas: state => state.tallas,
    forros: state => state.forros,
    suelas: state => state.suelas,
    hormas: state => state.hormas,
    clientes: state => state.clientes
  }

}