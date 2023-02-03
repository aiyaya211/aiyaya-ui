# aiyaya-ui
模仿elementUI自己写了一个组件库

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
**安装**
```shell
npm i aiyaya-ui -S
```

**引入**
在`main.js`中，添加以下代码
```javascript
import YaUI from 'aiyaya-ui';
import 'aiyaya-ui/dist/aiyaya-ui.css';

Vue.use(YaUI)
```
在`example/App.vue`中，有各个组件的简单使用`demo`

### 组件说明
#### Button按钮
**Attributes**
| 参数     | 说明     | 类型     | 可选值    |
| -------- | -------- | -------- |-------- |
| type |按钮类型 | string | primary / success / warning / danger / info  |
| round | 是否为圆角按钮 | boolean| false / true|
| circle | 是否为圆形按钮 | boolean | false / true |
| icon | 图标类型 | string | - |

#### Dialog对话框
**Attributes**
| 参数     | 说明     | 类型     | 可选值    |
| -------- | -------- | -------- |-------- |
| title |标题 | string |  -|
| width | 对话框宽度 | string| -|
| top | 距离顶部的高度 | string | -|
| visible | 是否显示 Dialog，支持 .sync 修饰符 | boolean | false |


**slot**
| 参数     | 说明     | 
| -------- | -------- |
| - |内容插槽 |
| title | 标题区插槽 |
| footer |底部插槽 | 


#### Input输入框
**Attributes**
| 参数     | 说明     | 类型     | 可选值    |
| -------- | -------- | -------- |-------- |
| placeholder |输入框占位文本 | string |  -|
| type | 类型 | string| text，textarea 和其他 原生 input 的 type 值|
| disabled | 禁用 | boolean | true / false|
| name | 原生属性 | string | - |
| clearable | 是否可清空输入框内容 | boolean | true / false |
| showPassword | 是否明文展示密码 | boolean | true / false |


#### Switch开关
**Attributes**
| 参数     | 说明     | 类型     | 可选值    |
| -------- | -------- | -------- |-------- |
| activeColor |switch 打开时的背景色 | string |  -|
| inactive-color | switch 关闭时的背景色 | string| -|
| name | 原生属性 | string | - |


#### Radio单选框
**Attributes**
| 参数     | 说明     | 类型     | 可选值    |
| -------- | -------- | -------- |-------- |
| label |Radio 的 value | string / number / boolean |  -|
| name | 原生属性 | string | - |


#### Checkbox多选框
**Attributes**
| 参数     | 说明     | 类型     | 可选值    |
| -------- | -------- | -------- |-------- |
| label |选中状态的值 | string / number / boolean |  -|
| name | 原生属性 | string | - |


#### Form表单
**Attributes**
| 参数     | 说明     | 类型     | 可选值    |
| -------- | -------- | -------- |-------- |
| label-width |表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。 | string / number / boolean |  -|
| model | 表单数据对象 | object | - |
