import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Battlestations from '@/components/Battlestations/Battlestations'
import BattlestationsGameAbout from '@/components/Battlestations/BattlestationsGameAbout'
import Mastermind from '@/components/Mastermind'
import MastermindGameAbout from '@/components/MastermindGameAbout'
import TowersOfHanoi from '@/components/TowersOfHanoi'
import JakeSays from '@/components/JakeSays'

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
      path: '/JakeSays/',
      name: 'JakeSays',
      component: JakeSays
    },
    {
      path: '/TowersOfHanoi/',
      name: 'TowersOfHanoi',
      component: TowersOfHanoi
    },
    {
      path: '/Battlestations/BattlestationsGameAbout/',
      name: 'BattlestationsGameAbout',
      component: BattlestationsGameAbout
    },
    {
      path: '/Mastermind/',
      name: 'Mastermind',
      component: Mastermind
    },
    {
      path: '/MastermindGameAbout',
      name: 'MastermindGameAbout',
      component: MastermindGameAbout
    },
  ]
})
