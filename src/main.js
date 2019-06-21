import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { PageHeader,Tag,Carousel,CarouselItem,Input,Button,
    Collapse,CollapseItem} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/lib/css/bootstrap.css'
import '@/assets/styles/icon.css'
import axios from 'axios'
import moment from 'moment'
axios.defaults.timeout = 10000 // 请求超时
axios.defaults.withCredentials=true
var instance=axios.create({
  baseURL:'/api/'
})
Vue.prototype.$axios=instance
Vue.use(PageHeader)
Vue.use(Tag)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.filter('dataFormat',function (data,pattern='YYYY-MM-DD hh:mm:ss') {
   return  moment(data).format(pattern)
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
