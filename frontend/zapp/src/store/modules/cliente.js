import axios from 'axios'
import credentials from "./credentials.js";

const url = "http://localhost:5984/zapp-clientes/";

async function getAll() {
  const response = await axios.post(`${url}_find`, {
    "selector": {}
  }, credentials.authentication);
  return response;
}


export default {
  namespaced: true,
  state: {
    clientes: []
  },
  mutations: {
    setClientes(state, data) {
      state.clientes = data;
      console.log("setClientes");
    }

  },
  actions: {
    async getClientes({
      commit
    }) {
      const res = await axios.post(`${url}_find`, {
        "selector": {}
      }, credentials.authentication);
      commit('setClientes', res.data.docs);
    },

    async updateCliente({
      commit
    }, cliente) {
      await axios.put(`${url}${cliente._id}/`, cliente, {
        params: {
          "rev": cliente._rev
        },
        "auth": credentials.authentication.auth,
        "headers": credentials.authentication.headers,
      }, credentials.authentication);
      const response = await getAll();
      commit('setClientes', response.data.docs);
    },

    async saveCliente({
      commit
    }, cliente) {
      const res = await axios.post(`${url}`, cliente, {
        "auth": credentials.authentication.auth,
        "headers": credentials.authentication.headers,
      }, credentials.authentication);

      const response = await getAll();
      commit('setClientes', response.data.docs);
      return res;
    },

    async deleteCliente({
      commit
    }, cliente) {
      await axios.delete(`${url}${cliente._id}`, {
        params: {
          "rev": cliente._rev
        },
        "auth": credentials.authentication.auth,
        "headers": credentials.authentication.headers,
      }, credentials.authentication);

      const response = await getAll();
      commit('setClientes', response.data.docs);
    }
  },
  getters: {
    clientes: state => state.clientes
  }
}