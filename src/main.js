import Vue from 'vue'
import App from './App.vue'
import YaButton from './components/button.vue'
import YaDialog from './components/dialog.vue'
import YaInput from './components/input.vue'
import YaSwitch from './components/switch.vue'
import './assets/fonts/font.scss'

Vue.config.productionTip = false
Vue.component(YaButton.name, YaButton)
Vue.component(YaDialog.name, YaDialog)
Vue.component(YaInput.name, YaInput)
Vue.component(YaSwitch.name, YaSwitch)

new Vue({
  render: h => h(App),
}).$mount('#app')
