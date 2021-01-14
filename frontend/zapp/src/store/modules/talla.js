import axios from 'axios'
import credentials from "./credentials.js";

const url = "http://localhost:5984/zapp-tallas/";

async function getAll() {
  const response = await axios.post(`${url}_find`, {
      "selector": {}
  }, credentials.authentication);
  return response;
}


export default {
  namespaced: true,
  state: {
    tallas: []
  },
  mutations: {
    setTallas(state, data) {
      state.tallas = data;
      console.log("setTallas");
    }

  },
  actions: {
    async getTallas({
      commit
    }) {
      const res = await axios.post(`${url}_find`, {
        "selector": {}
      }, credentials.authentication);
      commit('setTallas', res.data.docs);
    },

    async updateTalla({
      commit
    }, talla) {
       await axios.put(`${url}${talla._id}/`, talla, {
        params: {
          "rev": talla._rev
        },
        "auth": credentials.authentication.auth,
        "headers": credentials.authentication.headers,
      }, credentials.authentication);
      const response = await getAll();
      commit('setTallas', response.data.docs);
    },

    async saveTalla({
      commit
    }, talla) {
      await axios.post(`${url}`, talla, {
        "auth": credentials.authentication.auth,
        "headers": credentials.authentication.headers,
      }, credentials.authentication);

      const response = await getAll();
      commit('setTallas', response.data.docs);
    },

    async deleteTalla({commit}, talla){
      await axios.delete(`${url}${talla._id}`, {
          params: {
              "rev": talla._rev
          },
          "auth": credentials.authentication.auth,
          "headers": credentials.authentication.headers,
      }, credentials.authentication);
      
      const response = await getAll();
      commit('setTallas', response.data.docs);
  }
  },
  getters: {
    tallas: state => state.tallas
  }
}