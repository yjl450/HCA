import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import exhibition from '@/components/exhibition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Phoenix',
      component: HelloWorld
    },
    {
      path: '/exhibition',
      component: exhibition
      // redirect: '../https://baidu.com'
    }
  ]
})
