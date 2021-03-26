<template>
<lista-pedidos></lista-pedidos>
</template>


<script>
import ListaPedidos from "./ListaPedidos.vue";
//import { mapMutations } from "vuex";
export default {
    components: {
    ListaPedidos,
  },
  data() {
    return {

    };
  },
  methods: {
    //...mapMutations(["ocultarBarra"]),
    imprimir() {
      window.print();
    },
  },

  computed: {},
  created() {
    //this.ocultarBarra();
  },
};
</script>

