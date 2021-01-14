import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NuevoPedido from '../views/NuevoPedido.vue'
import AgregarForro from '../views/AgregarForro.vue'
import MantenimientoMaterial from '../views/MantenimientoMaterial.vue'
import AgregarSuela from '../views/AgregarSuela.vue'
import MantenimientoEstilo from '../views/MantenimientoEstilo.vue'
import VistaPrevia from '../components/VistaPrevia.vue'

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
    path: '/mantenimientoMaterial',
    name: 'MantenimientoMaterial',
    component: MantenimientoMaterial
  },
  {
    path: '/agregarSuela',
    name: 'AgregarSuela',
    component: AgregarSuela
  },
  {
    path: '/mantenimientoEstilo',
    name: 'MantenimientoEstilo',
    component: MantenimientoEstilo
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
