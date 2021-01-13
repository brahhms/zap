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
    tallas: [{


        "_id": "4bce85615b36787c9bc135d3e50101c1",
        "_rev": "1-f8bf7618640b01ac916a189a53d981b1",
        "nombre": "3",
        "forro": "",
        "material": ""

      },
      {

        "_id": "4bce85615b36787c9bc135d3e50113db",
        "_rev": "1-a04cb8dd9ea9a21c333678e1fdfe04fa",
        "nombre": "4",
        "forro": "",
        "material": ""

      },
      {

        "_id": "4bce85615b36787c9bc135d3e50126a3",
        "_rev": "1-755270332563b61b9fa1a5b5c441351d",
        "nombre": "5",
        "forro": "",
        "material": ""

      },
      {

        "_id": "4bce85615b36787c9bc135d3e5012c7d",
        "_rev": "1-20cdf3ed9e98a17ec3e07de1fbe80e2e",
        "nombre": "6",
        "forro": "",
        "material": ""

      },
      {

        "_id": "4bce85615b36787c9bc135d3e50138aa",
        "_rev": "1-c80fd10c2558e09121f601b1061a46ae",
        "nombre": "7",
        "forro": "",
        "material": ""

      },
      {

        "_id": "4bce85615b36787c9bc135d3e50140ff",
        "_rev": "1-1376d110d34e138a5985a5823c9403cb",
        "nombre": "8",
        "forro": "",
        "material": ""

      },
      {

        "_id": "4bce85615b36787c9bc135d3e5015011",
        "_rev": "1-0a3b16f7e9226a8331d6763eb03c9654",
        "nombre": "9",
        "forro": "",
        "material": ""

      }
    ],
    estilos: [{
      "_id": "4bce85615b36787c9bc135d3e50027ff",
      "_rev": "2-4cff98275d11b3b157718474e05eb325",
      "codigo": "TA2",
      "img": "",
      "descripcion": ""
    }, {
      "_id": "4bce85615b36787c9bc135d3e500939e",
      "_rev": "1-f47c6b428b989dfa460612e4219e67bd",
      "codigo": "TA3",
      "img": "",
      "descripcion": ""
    }, {
      "_id": "4bce85615b36787c9bc135d3e500b9af",
      "_rev": "1-a22bb497c7e0035b81071135ea0f363a",
      "codigo": "TA6",
      "img": "",
      "descripcion": ""
    }],
    materiales: [{
      "_id": "4bce85615b36787c9bc135d3e5003d30",
      "_rev": "2-aba6eabf542c1cbe2fa8c7c0c48392cd",
      "nombre": "durazno",
      "defaultColor": "negro",
      "colores": [
        "negro",
        "uva",
        "beige",
        "gena",
        "rosa vieja",
        "azul"
      ]
    }],
    forros: [{
      "_id": "4bce85615b36787c9bc135d3e500d4ce",
      "_rev": "1-2edb8962e797195bc87ef02a676cc636",
      "nombre": "tricot",
      "defaultColor": "gris",
      "colores": [
        "negro",
        "gris"
      ]
    }],
    suelas: [{
      "_id": "4bce85615b36787c9bc135d3e500d924",
      "_rev": "2-323fa7e587a303a323c50b268b9faff6",
      "nombre": "op",
      "defaultColor": "negro",
      "colores": [
        "gun",
        "negro"
      ]
    }],
    hormas: [{
      "_id": "25ed0e000c5ec314b560091076002edc",
      "_rev": "1-d5f3036d2e7af89b47d90692d949c533",
      "nombre": "hormaEjemplo"
    }]

  },
  mutations: {
    agregarDetalleDefault(state) {

      state.pedido.detalle.push(

        {
          estilo: state.estilos[0],
          detalleMaterial: {
            material: state.materiales[0],
            color: state.materiales[0].defaultColor
          },
          detalleTallas: state.tallas.map(t => {
            return {
              talla: t,
              cantidad: 0
            };
          }),
          horma: state.hormas[0],
          detalleForro: {
            forro: state.forros[0],
            color: state.forros[0].defaultColor
          },
          detalleSuela: {
            suela: state.suelas[0],
            color: state.suelas[0].defaultColor
          },
          subtotal: 0
        }

      );


    },
    setCliente(state, cliente) {
      state.pedido.cliente = cliente;
      if (cliente != null) {
        console.log("cliente seleccionado en pedido:" + state.pedido.cliente.nombre);
      } else {
        console.log("no ha seleccionado ningun cliente");
      }

    }

  },
  actions: {},
  getters: {
    pedido: state => state.pedido,
    clienteSeleccionado: state => state.pedido.cliente,
    //database
    estilos: state => state.estilos,
    materiales: state => state.materiales,
    tallas: state => state.tallas,
    forros: state => state.forros,
    suelas: state => state.suelas,
    hormas: state => state.hormas
  }
}