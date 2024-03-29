import Vue from 'vue'
import App from './App.vue'
import YaUI from '../packages'
// import YaButton from './components/button.vue'
// import YaDialog from './components/dialog.vue'
// import YaInput from './components/input.vue'
// import YaSwitch from './components/switch.vue'
// import YaRadio from './components/radio.vue'
// import YaRadioGroup from './components/radio-group.vue'
// import YaCheckbox from './components/checkbox.vue'
// import YaCheckboxGroup from './components/checkbox-group.vue'
// import YaForm from './components/form.vue'
// import YaFormItem from './components/form-item.vue'
// import './assets/fonts/font.scss'

Vue.config.productionTip = false
Vue.use(YaUI)
// Vue.component(YaButton.name, YaButton)
// Vue.component(YaDialog.name, YaDialog)
// Vue.component(YaInput.name, YaInput)
// Vue.component(YaSwitch.name, YaSwitch)
// Vue.component(YaRadio.name, YaRadio)
// Vue.component(YaRadioGroup.name, YaRadioGroup)
// Vue.component(YaCheckbox.name, YaCheckbox)
// Vue.component(YaCheckboxGroup.name, YaCheckboxGroup)
// Vue.component(YaForm.name, YaForm)
// Vue.component(YaFormItem.name, YaFormItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
