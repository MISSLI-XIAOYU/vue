import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
import PigButton from '@lixiaoyu1/pig-ui'
import '@lixiaoyu1/pig-ui/pig-ui.css'

Vue.use(PigButton)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  render: h => h(App),
}).$mount('#app')
