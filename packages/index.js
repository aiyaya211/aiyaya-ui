// 导入组件
import Button from './button.vue';
import CheckboxGroup from './checkbox-group.vue';
import Checkbox from './checkbox.vue';
import Dialog from './dialog.vue';
import FormItem from './form-item.vue';
import Form from './form.vue';
import Input from './input.vue';
import RadioGroup from './radio-group.vue';
import Radio from './radio.vue';
import Switch from './switch.vue';
import './fonts/font.scss'

const components = [
    Button,
    CheckboxGroup,
    Checkbox,
    Dialog,
    FormItem,
    Form,
    Input,
    RadioGroup,
    Radio,
    Switch
];
// 定义install方法
// Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
const install = (Vue) => {
    components.forEach(item => {
        Vue.component(item.name, item)
    })
}
// 判断是否是直接引入文件,如果是，就不用调用 Vue.use() 
if (typeof window !== 'undefined' && window.Vue) { 
    install(window.Vue) 
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装 
export default { install }