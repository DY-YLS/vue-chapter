import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { PageHeader,Tag,Carousel,CarouselItem,Input,Button,
    Collapse,CollapseItem,Loading,Tabs,TabPane,Card,InputNumber} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/lib/css/bootstrap.css'
import '@/assets/styles/icon.css'
import axios from 'axios'
import moment from 'moment'
import VueLazyload from 'vue-lazyload'
axios.defaults.timeout = 10000 // 请求超时
axios.defaults.withCredentials=true
var instance=axios.create({
  baseURL:'/api/'
})
Vue.prototype.$axios=instance
Vue.use(InputNumber)
Vue.use(Card)
Vue.use(PageHeader)
Vue.use(Tag)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Loading)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(VueLazyload)
Vue.filter('dataFormat',function (data,pattern='YYYY-MM-DD hh:mm:ss') {
   return  moment(data).format(pattern)
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
