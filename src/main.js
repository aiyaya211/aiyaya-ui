import Vue from 'vue'
import App from './App.vue'
import YaButton from './components/button.vue'

Vue.config.productionTip = false
Vue.component(YaButton.name, YaButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
