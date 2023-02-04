<!-- 辅助色模块 -->
<template>
  <div class="contain">
    <div class="block-text">【1】文字：</div>
    <div class="block" style="background-color: #303133">#303133</div>
    <div class="block" style="background-color: #606266">#606266</div>
    <div class="block" style="background-color: #909399">#909399</div>
    <div class="block" style="background-color: #a8abb2">#a8abb2</div>
  </div>
  <hr />
  <div class="contain">
    <div class="block-text">【2】背景：</div>
    <div class="block" style="background-color: #e6e8eb">#e6e8eb</div>
    <div class="block" style="background-color: #ebedf0">#ebedf0</div>
    <div class="block" style="background-color: #f0f2f5">#f0f2f5</div>
    <div class="block" style="background-color: #fafafa">#fafafa</div>
  </div>
  <hr />
</template>

<style lang="scss" scoped>
.contain {
  display: flex;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  height: 80px;
  line-height: 80px;
  .block-text {
    flex: 1;
    color: #334759;
  }
  .block {
    flex: 2;
    background-color: green;
    margin-right: 40px;

    border-radius: 10px;
  }
}
</style>
