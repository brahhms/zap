import axios from 'axios'
import credentials from "./credentials.js";

const url = "http://localhost:5984/zapp-pedidos/";

async function getAll() {
  const response = await axios.post(`${url}_find`, {
    "selector": {}
  }, credentials.authentication);
  return response;
}

function semanaDelAno() {
  let constantes = [2, 1, 7, 6, 5, 4, 3];
  let fecha = new Date();

  let dia = fecha.getDay();

  let mes = fecha.getMonth();
  mes++;

  let ano = fecha.getFullYear();
  if (mes != 0) {
    mes--;
  }

  let dia_pri = new Date(ano, 0, 1);
  dia_pri = dia_pri.getDay();
  // Obtenemos el dia de la semana del 1 de enero
  dia_pri = eval(constantes[dia_pri]);
  // Obtenemos el valor de la constante correspondiente al día
  let tiempo0 = new Date(ano, 0, dia_pri);
  // Establecemos la fecha del primer dia de la semana del año
  dia = dia + dia_pri;
  // Sumamos el valor de la constante a la fecha ingresada para mantener
  // los lapsos de tiempo
  let tiempo1 = new Date(ano, mes, dia);
  // Obtenemos la fecha con la que operaremos
  let lapso = tiempo1 - tiempo0;
  // Restamos ambas fechas y obtenemos una marca de tiempo
  let semanas = Math.floor(lapso / 1000 / 60 / 60 / 24 / 7);
  // Dividimos la marca de tiempo para obtener el numero de semanas
  if (dia_pri == 1) {
    semanas++;
  }

  // Si el 1 de enero es lunes le sumamos 1 a la semana caso contrarios el
  // calculo nos daria 0 y nos presentaria la semana como semana 52 del
  // año anterior

  if (semanas == 0) {
    semanas = 52;
    ano--;
  }
  // Establecemos que si el resultado de semanas es 0 lo cambie a 52 y
  // reste 1 al año esto funciona para todos los años en donde el 1 de
  // Enero no es Lunes

  if (ano < 10) {
    ano = "0" + ano;
  }
  // Por pura estetica establecemos que si el año es menor de 10, aumente
  // un 0 por delante, esto para aquellos que ingresen formato de fecha
  // corto dd/mm/yy

  return semanas;
}


export default {
  namespaced: true,
  state: {
    pedido: {
      cliente: null,
      fecha: new Date(),
      semana: semanaDelAno(),
      detalle: []
    },

    resumen: [],

    //database
    pedidos: null,
    estilos: null,
    materiales: null,
    tallas: null,
    forros: null,
    suelas: null,
    hormas: null,
    clientes: null,

    //var
    isValid: false
  },
  mutations: {

  //  getResumen(state) {
    //  let resumen = [];
   //   state.pedido.detalle.forEach(deta => {

  //    });
  //  },

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
    validarPedido(state) {
      state.isValid = false;
      if (state.pedido.cliente == null) {
        console.log("cliente vacio");
      } else if (state.pedido.detalle == null) {
        console.log("detalle vacio");
      } else {
       
        let errores = 0;
        state.pedido.detalle.forEach(deta => {

          if (deta.estilo == null ||
            deta.detalleMaterial.material == null ||
            deta.detalleForro.forro == null ||
            deta.detalleSuela.suela == null ||
            deta.horma == null ||
            deta.subtotal <= 0) {
            errores++;
            console.log("elemento vacio");
          } 

        });

        if (errores == 0) {
          state.isValid = true;
          console.log("pedido valido");
        }

      }

    },
    addDetalle(state) {
      let detalleDefault = {
        estilo: null,
        detalleMaterial: {
          material: null,
          color: null,
        },
        detalleTallas: null,
        horma: null,
        detalleForro: {
          forro: null,
          color: null,
        },
        detalleSuela: {
          suela: null,
          color: null,
        },
        subtotal: 0,
      };
      detalleDefault.detalleTallas = state.tallas.map((t) => {
        return {
          talla: t,
          cantidad: 0,
        };
      });
      detalleDefault.estilo = null;
      detalleDefault.detalleMaterial.material = state.materiales[0];
      detalleDefault.detalleMaterial.color = state.materiales[0].defaultColor;
      detalleDefault.detalleForro.forro = state.forros[0];
      detalleDefault.detalleForro.color = state.forros[0].defaultColor;
      detalleDefault.detalleSuela.suela = state.suelas[0];
      detalleDefault.detalleSuela.color = state.suelas[0].defaultColor;
      detalleDefault.horma = state.hormas[0];

      state.pedido.detalle.push(detalleDefault);

    },
    setPedidos(state, pedidos) {
      state.pedidos = pedidos;
    },
    setData(state, data) {
      state.estilos = data[0].data.docs;
      state.materiales = data[1].data.docs;
      state.tallas = data[2].data.docs;
      state.forros = data[3].data.docs;
      state.suelas = data[4].data.docs;
      state.hormas = data[5].data.docs;
      state.clientes = data[6].data.docs;
    },

    removeDetalle(state, detalle) {
      let index = state.pedido.detalle.indexOf(detalle);
      state.pedido.detalle.splice(index, 1);
    },

    duplicateDetalle(state, item) {
      let detalle = Object.assign({}, item);
      detalle.detalleMaterial = {
        ...item.detalleMaterial
      };
      detalle.detalleForro = {
        ...item.detalleForro
      };
      detalle.detalleSuela = {
        ...item.detalleSuela
      };
      detalle.detalleTallas = item.detalleTallas.map(item => {
        return {
          ...item
        }
      });

      let index = state.pedido.detalle.indexOf(detalle);
      state.pedido.detalle.splice(index, 0, detalle);
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

    async savePedido({
      commit,
      state
    }) {
      const res = await axios.post(`${url}`, state.pedido, {
        "auth": credentials.authentication.auth,
        "headers": credentials.authentication.headers,
      }, credentials.authentication);

      const response = await getAll();
      commit('setPedidos', response.data.docs);
      return res;
    },

    async iniciarDetalle({
      commit
    }) {
      const data = await axios.all([
        axios.post(`http://localhost:5984/zapp-estilos/_find`, {
          "selector": {}
        }, credentials.authentication),
        axios.post('http://localhost:5984/zapp-materiales/_find', {
          "selector": {}
        }, credentials.authentication),
        axios.post('http://localhost:5984/zapp-tallas/_find', {
          "selector": {}
        }, credentials.authentication),
        axios.post('http://localhost:5984/zapp-forros/_find', {
          "selector": {}
        }, credentials.authentication),
        axios.post('http://localhost:5984/zapp-suelas/_find', {
          "selector": {}
        }, credentials.authentication),
        axios.post('http://localhost:5984/zapp-hormas/_find', {
          "selector": {}
        }, credentials.authentication),
        axios.post('http://localhost:5984/zapp-clientes/_find', {
          "selector": {}
        }, credentials.authentication)
      ]);
      commit('setData', data);

      commit('setDetalle', []);

      commit('addDetalle');

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
    clientes: state => state.clientes,

    isPedidoValid: state => state.isValid,
    semana: state => state.pedido.semana
  }

}