<template>
  <y-row>
    <y-button disabled>默认button</y-button>
    <y-button type="primary" disabled>主要button</y-button>
    <y-button type="success" disabled>成功button</y-button>
    <y-button type="info" disabled>信息button</y-button>
    <y-button type="warning" disabled>警告button</y-button>
    <y-button type="danger" disabled>危险button</y-button>
  </y-row>
  <y-row>
    <y-button plain disabled>默认button</y-button>
    <y-button type="primary" plain disabled>主要button</y-button>
    <y-button type="success" plain disabled>成功button</y-button>
    <y-button type="info" plain disabled>信息button</y-button>
    <y-button type="warning" plain disabled>警告button</y-button>
    <y-button type="danger" plain disabled>危险button</y-button>
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
