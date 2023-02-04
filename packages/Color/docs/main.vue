<!-- 主色模块 -->
<template>
  <div class="contain">
    <div class="first">
      <div>主色：#409eff</div>
    </div>
    <div class="second">
      <div class="color-block" style="background-color: #1773c2">#1773c2</div>
      <div class="color-block" style="background-color: #4ca8fb">#4ca8fb</div>
      <div class="color-block" style="background-color: #62b3fb">#62b3fb</div>
      <div class="color-block" style="background-color: #8ec9fc">#8ec9fc</div>
      <div class="color-block" style="background-color: #a4d3fd">#a4d3fd</div>
      <div class="color-block" style="background-color: #d1e9fe">#d1e9fe</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contain {
  display: flex;
  font-weight: 600;
  color: #fff;
  .first {
    width: 20%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-color: #409eff;

    border-radius: 8px;
  }
  .second {
    display: flex;
    width: 80%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    .color-block {
      flex: 1;
      background-color: red;
      margin-left: 10px;
      border-radius: 8px;
    }
  }
}
</style>
