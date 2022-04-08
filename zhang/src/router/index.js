import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/chuan/HelloWorld.vue'
import vList from '../components/text/list.vue'
import vHome from '../components/home/home.vue'
import vIndex from '../components/index/index.vue'
import vTee from '../components/home/tdada.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vList',
      component: vList
    },
    {
      path: '/home',
      name: 'vHome',
      component: vHome
    },
    {
      path: '/index/:id',
      name: 'vIndex',
      component: vIndex
    },
    {
      path: '/vTee',
      name: 'vTee',
      component: vTee
    }
  ]
})
