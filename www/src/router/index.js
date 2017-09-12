import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Battlestations from '@/components/Battlestations/Battlestations'
import Alex from '@/components/Alex'
import Matt from '@/components/Matt'
import Austin from '@/components/Austin'
import Josh from '@/components/Josh'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // front end routes only
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Battlestations/Battlestations/',
      name: 'Battlestations',
      component: Battlestations
    },
    {
      path: '/Alex/',
      name: 'Alex',
      component: Alex
    },
    {
      path: '/Matt/',
      name: 'Matt',
      component: Matt
    },
    {
      path: '/Austin/',
      name: 'Austin',
      component: Austin
    },
    {
      path: '/Josh/',
      name: 'Josh',
      component: Josh
    }
  ]
})
