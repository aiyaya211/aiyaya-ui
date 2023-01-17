<template>
  <div id="app">
    <div class="row">
      <ya-button type="primary">主要</ya-button>
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
  </div>
</template>

<script>

export default {
  name: 'App',
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
