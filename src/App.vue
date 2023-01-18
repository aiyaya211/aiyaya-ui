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
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    test() {
      console.log('测试')
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .ya-button {
    margin-right: 10px;
  }
}

</style>
