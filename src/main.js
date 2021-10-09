import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/main.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { lazyLoadOne } from './utils/lazy-load'
import VueTinyLazyloadImg from './plugins/vue-lazy-load-img'

// 设置响应式
const setHtmlFontSize = () => {
  const htmlDom = document.documentElement
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth
  if (htmlWidth >= 750) {
    htmlWidth = 750
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320
  }
  htmlDom.style.fontSize = `${htmlWidth / 7.5}px`
}
window.onresize = setHtmlFontSize
setHtmlFontSize()

// 自定义指令
Vue.use(VueTinyLazyloadImg)
// const lazyLoadFn = lazyLoadOne()
// Vue.directive('lazy', {
//   inserted(el) {
//     lazyLoadFn(el)
//   },
// })

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
