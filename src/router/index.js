import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const DefaultContainer = () => import('@/Containers/DefaultContainer')
const Dashboard = () => import('@/views/Dashboard')
const Groups = () => import('@/views/Groups')
const Info = () => import('@/views/Info')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: DefaultContainer,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'groups',
        name: 'Groups',
        component: Groups
      },
      {
        path: 'info',
        name: 'Info',
        component: Info
      }
    ]
  },
  { 
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
