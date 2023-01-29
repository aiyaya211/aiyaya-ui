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
      <ya-radio label="1" v-model="gender">男</ya-radio>
      <ya-radio label="0" v-model="gender">女</ya-radio>
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
      gender: 1,
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