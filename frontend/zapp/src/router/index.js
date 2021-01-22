import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pedidos from '../views/Pedidos.vue'
import NuevoPedido from '../views/NuevoPedido.vue'
import MantenimientoForro from '../views/MantenimientoForro.vue'
import MantenimientoMaterial from '../views/MantenimientoMaterial.vue'
import MantenimientoSuela from '../views/MantenimientoSuela.vue'
import MantenimientoEstilo from '../views/MantenimientoEstilo.vue'
import MantenimientoCliente from '../views/MantenimientoCliente.vue'
import VistaPrevia from '../components/VistaPrevia.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: Pedidos
  },
  {
    path: '/nuevoPedido',
    name: 'NuevoPedido',
    component: NuevoPedido
  },
  {
    path: '/mantenimientoForro',
    name: 'MantenimientoForro',
    component: MantenimientoForro
  },
  {
    path: '/mantenimientoMaterial',
    name: 'MantenimientoMaterial',
    component: MantenimientoMaterial
  },
  {
    path: '/mantenimientoSuela',
    name: 'MantenimientoSuela',
    component: MantenimientoSuela
  },
  {
    path: '/mantenimientoEstilo',
    name: 'MantenimientoEstilo',
    component: MantenimientoEstilo
  },
  {
    path: '/mantenimientoCliente',
    name: 'MantenimientoCliente',
    component: MantenimientoCliente
  },
  {
    path: '/vistaPrevia',
    name: 'VistaPrevia',
    component: VistaPrevia
  }

]

const router = new VueRouter({
  routes
})

export default router
