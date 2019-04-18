import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import news from '@/view/news'
import stores from '@/view/stores'
import events from '@/view/events'
import products from '@/view/products'
import sweaining from '@/view/sweaining'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/stores',
      name: 'stores',
      component: stores
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/sweaining',
      name: 'sweaining',
      component: sweaining
    }
  ]
})
