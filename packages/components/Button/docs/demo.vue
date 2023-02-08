<template>
  <y-row>
    <y-button>默认button</y-button>
    <y-button type="primary">主要button</y-button>
    <y-button type="success">成功button</y-button>
    <y-button type="info">信息button</y-button>
    <y-button type="warning">警告button</y-button>
    <y-button type="danger">危险button</y-button>
  </y-row>
  <y-row>
    <y-button plain>默认button</y-button>
    <y-button type="primary" plain>主要button</y-button>
    <y-button type="success" plain>成功button</y-button>
    <y-button type="info" plain>信息button</y-button>
    <y-button type="warning" plain>警告button</y-button>
    <y-button type="danger" plain>危险button</y-button>
  </y-row>
  <y-row>
    <y-button round>默认button</y-button>
    <y-button type="primary" round>主要button</y-button>
    <y-button type="success" round>成功button</y-button>
    <y-button type="info" round>信息button</y-button>
    <y-button type="warning" round>警告button</y-button>
    <y-button type="danger" round>危险button</y-button>
  </y-row>
  <y-row>
    <y-button circle />
    <y-button type="primary" circle />
    <y-button type="success" circle />
    <y-button type="info" circle />
    <y-button type="warning" circle />
    <y-button type="danger" circle />
  </y-row>
</template>

<style lang="scss" scoped>
.y-row {
  margin-bottom: 20px;
  .y-button {
    margin-right: 20px;
  }
}
</style>
