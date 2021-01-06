import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NuevoPedido from '../views/NuevoPedido.vue'
import AgregarForro from '../views/AgregarForro.vue'
import AgregarMaterial from '../views/AgregarMaterial.vue'
import AgregarSuela from '../views/AgregarSuela.vue'
import AgregarZapato from '../views/AgregarZapato.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nuevoPedido',
    name: 'NuevoPedido',
    component: NuevoPedido
  },
  {
    path: '/agregarForro',
    name: 'AgregarForro',
    component: AgregarForro
  },
  {
    path: '/agregarMaterial',
    name: 'AgregarMaterial',
    component: AgregarMaterial
  },
  {
    path: '/agregarSuela',
    name: 'AgregarSuela',
    component: AgregarSuela
  },
  {
    path: '/agregarZapato',
    name: 'AgregarZapato',
    component: AgregarZapato
  }

]

const router = new VueRouter({
  routes
})

export default router
