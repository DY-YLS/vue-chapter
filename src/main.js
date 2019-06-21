import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { PageHeader,Tag,Carousel,CarouselItem} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/lib/css/bootstrap.css'
import '@/assets/styles/icon.css'
import axios from 'axios'
axios.defaults.timeout = 5000 // 请求超时
axios.defaults.withCredentials=true
var instance=axios.create({
  baseURL:'/api/'
})
Vue.prototype.$axios=instance
Vue.use(PageHeader)
Vue.use(Tag)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
