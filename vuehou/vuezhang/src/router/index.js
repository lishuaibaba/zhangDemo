import Vue from 'vue'
import Router from 'vue-router'
import index from "../components/index/index"
import fakes from "../components/fakes/fakes"
import children from "../components/children/children"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/fakes',
      name: 'fakes',
      component: fakes
    },
    {
      path: '/children',
      name: 'children',
      component: children
    }
  ]
})
