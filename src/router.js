import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeContainer from '@/components/HomeContainer.vue'
import MemberContainer from '@/components/MemberContainer.vue'
import SearchContainer from './components/SearchContainer.vue'
import ShopcarContainer from './components/ShopcarContainer.vue'
import NewsList from './components/news/NewsList'
import NewsInfo from './components/news/NewsInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:HomeContainer
    },
    {
      path:'/member',
      component:MemberContainer
    },
    {
      path:'/shopcar',
      component:ShopcarContainer
    },
    {
      path:'/search',
      component:SearchContainer
    },
    {
      path:'/home/newslist',
      component:NewsList
    },
    {
      path:'/home/newsinfo/:id',
      component:NewsInfo
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue')
    }*/
  ],

})
