<template>
  <div id="app">
    <div class="row">
      <ya-button type="primary" icon="ya-icon-sousuo" @click="test">主要</ya-button>
      <ya-button type="success">成功</ya-button>
      <ya-button type="info">信息</ya-button>
      <ya-button type="warning">警告</ya-button>
      <ya-button type="danger">危险</ya-button>
    </div>
    <div class="row">
      <ya-button type="primary" plain>主要</ya-button>
      <ya-button type="success" plain>成功</ya-button>
      <ya-button type="info" plain>信息</ya-button>
      <ya-button type="warning" plain>警告</ya-button>
      <ya-button type="danger" plain>危险</ya-button>
    </div>
    <div class="row">
      <ya-button type="primary" round>主要</ya-button>
      <ya-button type="success" round>成功</ya-button>
      <ya-button type="info" round>信息</ya-button>
      <ya-button type="warning" round>警告</ya-button>
      <ya-button type="danger" round>危险</ya-button>
    </div>
    <div class="row">
      <ya-button type="primary" circle icon="ya-icon-shezhi-xianxing" plain></ya-button>
      <ya-button type="success" circle icon="ya-icon-sousuo"></ya-button>
      <ya-button type="info" circle icon="ya-icon-tishijinggao"></ya-button>
      <ya-button type="warning" circle icon="ya-icon-xiazai"></ya-button>
      <ya-button type="danger" circle icon="ya-icon-chongzhijiaofei"></ya-button>
    </div>
    <!--  disabled -->
    <div class="row">
      <ya-button type="primary" disabled>主要</ya-button>
      <ya-button type="success" disabled>成功</ya-button>
      <ya-button type="info" disabled>信息</ya-button>
      <ya-button type="warning" disabled>警告</ya-button>
      <ya-button type="danger" disabled>危险</ya-button>
    </div>
    <!-- 弹窗 -->
    <div class="row">
      <ya-button @click="visible = true">打开弹窗</ya-button>
    </div>
    <!-- sync的用法 -->
    <!-- 等同于  <ya-dialog width="60%" :visible="visible" @update:visible="">-->
    <ya-dialog width="60%" :visible.sync="visible">
      <template v-slot:title>
        <h4>slot的用法</h4>
      </template>
      <span>这是内容</span>
      <template v-slot:footer>
          <ya-button style="margin-right: 10px;" @click="visible = false">取消</ya-button>
          <ya-button type="primary" @click="visible = false">确定</ya-button>
      </template>
    </ya-dialog>
    <!-- 输入框 -->
    <div class="row">
      <ya-input placeholder="试一试" v-model="content" clearable />
      <ya-input placeholder="试一试" v-model="passwordContent" showPassword type="password"/>
    </div>
    <div class="row">
      <ya-switch 
      v-model="show"
      active-color="green"
      inactive-color="#ff4949"
      name="choose">
      </ya-switch>
    </div>
    <div class="row">
      <!-- 点击选择某个radio之后要修改父组件的值 -->
      <ya-radio label="1" v-model="gender">男</ya-radio>
      <ya-radio label="0" v-model="gender">女</ya-radio>
    </div>
    <div class="row">
      <!-- 选框组 -->
      <ya-radio-group  v-model="fruit">
        <ya-radio label="orange">橘子</ya-radio>
        <ya-radio label="apple">苹果</ya-radio>
      </ya-radio-group>
    </div>
    <div class="row">
      <!-- checkbox和radio很像 -->
      <ya-checkbox  v-model="checked" label="测试"></ya-checkbox>
    </div>
    <div class="row">
      <ya-checkbox-group v-model="checkList">
          <ya-checkbox label="复选框 A"></ya-checkbox>
          <ya-checkbox label="复选框 B"></ya-checkbox>
          <ya-checkbox label="复选框 C"></ya-checkbox>
      </ya-checkbox-group>
    </div>
    <div class="row">
      <ya-form :model="form" label-width="50px">
        <ya-form-item label="姓名">
           <ya-input placeholder="姓名" clearable v-model="form.name"/>
        </ya-form-item>
        <ya-form-item label="性别">
          <ya-radio-group v-model="form.gender">
            <ya-radio label="male">男</ya-radio>
            <ya-radio label="female">女</ya-radio>
          </ya-radio-group>
        </ya-form-item>
        <ya-form-item label="年龄">
           <ya-input placeholder="年龄" clearable  v-model="form.age" />
        </ya-form-item>
      </ya-form>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      visible: false,
      content: '888',
      passwordContent: '',
      show: false,
      gender: '1',
      fruit: 'apple',
      checked: true,
      checkList: [],
      form: {}
    }
  },
  methods: {
    test() {
      console.log('测试')
    },
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .ya-button {
    margin-right: 20px;
  }
}
// .ya-input {
//    width: 180px;
// }
</style>>