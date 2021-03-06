import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import news from '@/view/news'
import stores from '@/view/stores'
import stores_detail from '@/view/stores_detail'
import events from '@/view/events'
import events_detail from '@/view/events_detail'
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
      path: '/stores_detail',
      name: 'stores_detail',
      component: stores_detail
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/events_detail',
      name: 'events_detail',
      component: events_detail
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
