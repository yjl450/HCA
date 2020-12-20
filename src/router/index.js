import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import exhibition from '@/components/exhibition'
import shang from "@/components/shang"
import qin from "@/components/qin"
import wei from "@/components/wei"
import tang from "@/components/tang"
import song from "@/components/song"
import yuan from "@/components/yuan"
import ming from "@/components/ming"
import comparison from "@/components/comparison"
import summary from "@/components/summary"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Phoenix',
      component: HelloWorld
    },
    {
      path: '/shang',
      component: exhibition,
      children: [
        {
          name: 'Shang & Zhou',
          path: '',
          component: shang
        }
      ]
    },
    {
      path: '/qin',
      component: exhibition,
      children: [
        {
          name: 'Qin & Han',
          path: '',
          component: qin
        }
      ]
    },
    {
      path: '/wei',
      component: exhibition,
      children: [
        {
          // name: '',
          path: '',
          component: wei
        }
      ]
    },
    {
      path: '/tang',
      component: exhibition,
      children: [
        {
          // name: 'Shang & Zhou',
          path: '',
          component: tang
        }
      ]
    },
    {
      path: '/song',
      component: exhibition,
      children: [
        {
          // name: 'Shang & Zhou',
          path: '',
          component: song
        }
      ]
    },
    {
      path: '/yuan',
      component: exhibition,
      children: [
        {
          // name: 'Shang & Zhou',
          path: '',
          component: yuan
        }
      ]
    },
    {
      path: '/ming',
      component: exhibition,
      children: [
        {
          // name: 'Shang & Zhou',
          path: '',
          component: ming
        }
      ]
    },
    {
      path: '/comparison',
      component: exhibition,
      children: [
        {
          // name: 'Shang & Zhou',
          path: '',
          component: comparison
        }
      ]
    },
    {
      path: '/summary',
      component: exhibition,
      children: [
        {
          // name: 'Shang & Zhou',
          path: '',
          component: summary
        }
      ]
    },
    {
      path: '*',
      redirect: "/"
    },
  ]
})
