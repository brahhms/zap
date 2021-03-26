import axios from 'axios'
import credentials from "./credentials.js";


const url = "http://localhost:5984/zapp-pedidos/";

export default {
  namespaced: true,
  state: {
    semana:null,
    ano:null,
    listaDeCompras:null,
    pedidos:null
  },
  mutations: {
    setAnoSemana(state,year){
      state.ano=year;
    },
    setSemanaSemana(state,semana){
      state.semana=semana;
    },
    setPedidos(state,pedidos){
      state.pedidos=pedidos;
      console.log("setPedidosSemana: "+state.semana+"-"+state.ano);
    }
  },
  actions: {
    async getPedidosSemana({
      commit,state
    }) {
      const res = await axios.post(`${url}_find`, {
        "selector": {
          "semana":state.semana,
          "ano":state.ano
        }
      }, credentials.authentication);
      console.log(res.data.docs);

      commit('setPedidos', res.data.docs);

    },




  },
  getters: {
    pedidos: state => state.pedidos,
    semana: state => state.semana,
    ano: state => state.ano
  }

}
