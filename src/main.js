import Vue from 'vue'
import App from './App.vue'
import YaButton from './components/button.vue'
import YaDialog from './components/dialog.vue'
import './assets/fonts/font.scss'

Vue.config.productionTip = false
Vue.component(YaButton.name, YaButton)
Vue.component(YaDialog.name, YaDialog)

new Vue({
  render: h => h(App),
}).$mount('#app')
