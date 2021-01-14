import axios from 'axios'
import credentials from "./credentials.js";

const url = "http://localhost:5984/zapp-estilos/";

async function getAll() {
  const response = await axios.post(`${url}_find`, {
    "selector": {}
  }, credentials.authentication);
  return response;
}


export default {
  namespaced: true,
  state: {
    estilos: []
  },
  mutations: {
    setEstilos(state, data) {
      state.estilos = data;
      console.log("setEstilos");
    }

  },
  actions: {
    async getEstilos({
      commit
    }) {
      const res = await axios.post(`${url}_find`, {
        "selector": {}
      }, credentials.authentication);
      commit('setEstilos', res.data.docs);
    },

    async updateEstilo({
      commit
    }, estilo) {
      await axios.put(`${url}${estilo._id}/`, estilo, {
        params: {
          "rev": estilo._rev
        },
        "auth": credentials.authentication.auth,
        "headers": credentials.authentication.headers,
      }, credentials.authentication);
      const response = await getAll();
      commit('setEstilos', response.data.docs);
    },

    async saveEstilo({
      commit
    }, estilo) {
      await axios.post(`${url}`, estilo, {
        "auth": credentials.authentication.auth,
        "headers": credentials.authentication.headers,
      }, credentials.authentication);

      const response = await getAll();
      commit('setEstilos', response.data.docs);
    },

    async deleteEstilo({
      commit
    }, estilo) {
      await axios.delete(`${url}${estilo._id}`, {
        params: {
          "rev": estilo._rev
        },
        "auth": credentials.authentication.auth,
        "headers": credentials.authentication.headers,
      }, credentials.authentication);

      const response = await getAll();
      commit('setEstilos', response.data.docs);
    }
  },
  getters: {
    estilos: state => state.estilos
  }
}