import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const DefaultContainer = () => import('@/Containers/DefaultContainer')
const Dashboard = () => import('@/views/Dashboard')
const Groups = () => import('@/views/Groups')
const Info = () => import('@/views/Info')
const Person = () => import('@/views/Person')
const Inventory = () => import('@/views/Inventory')
const PersonCreate = () => import('@/views/PersonCreate')
const Help = () => import('@/views/Help')
const Profile = () => import('@/views/Profile')

const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem('access_token')!=null) next()
  else next('/login')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: DefaultContainer,
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
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
      },
      {
        path: 'person',
        name: 'Person',
        component: Person
      },
      {
        path: 'inventory',
        name: 'Inventory',
        component: Inventory
      },
      {
        path: 'personcreate',
        component: PersonCreate
      },
      {
        path: 'help',
        component: Help
      },
      {
        path: 'profile',
        component: Profile
      }
    ]
  },
  { 
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
