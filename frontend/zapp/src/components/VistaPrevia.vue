<template>
<resumen-pedido></resumen-pedido>
</template>


<script>
import ResumenPedido from "../components/ResumenPedido.vue";
//import { mapMutations } from "vuex";
export default {
    components: {
    ResumenPedido,
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

