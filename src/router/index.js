import Vue from 'vue'
import VueRouter from 'vue-router'
import discovery from '@/views/discovery/'
import songs from '@/views/songs/'
import mvs from '@/views/mvs/'
import playList from '@/views/play-list/'
import searchResult from '@/views/search-result/'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    redirect: '/discovery',
  },
  {
    name: 'discovery',
    path: '/discovery',
    component: discovery,
  },
  {
    name: 'songs',
    path: '/songs',
    component: songs,
  },
  {
    name: 'play-list',
    path: '/play-list',
    component: playList,
  },
  {
    name: 'mvs',
    path: '/mvs',
    component: mvs,
  },
  {
    name: 'result',
    path: '/result',
    component: searchResult,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
