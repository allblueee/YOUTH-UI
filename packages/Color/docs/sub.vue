<!-- 辅助色模块 -->
<template>
  <div class="contain">
    <div class="first" style="background-color: #67c23a">
      <div>成功：#67c23a</div>
    </div>
    <div class="second">
      <div class="color-block" style="background-color: #3f9031">#3f9031</div>
      <div class="color-block" style="background-color: #83ce70">#83ce70</div>
      <div class="color-block" style="background-color: #a5dc96">#a5dc96</div>
      <div class="color-block" style="background-color: #c8eabe">#c8eabe</div>
      <div class="color-block" style="background-color: #dbf1d4">#dbf1d4</div>
      <div class="color-block" style="background-color: #edf8e9">#edf8e9</div>
    </div>
  </div>
  <hr />
  <div class="contain">
    <div class="first" style="background-color: #e6a23c">
      <div>警告：#e6a23c</div>
    </div>
    <div class="second">
      <div class="color-block" style="background-color: #b57733">#b57733</div>
      <div class="color-block" style="background-color: #f1b672">#f1b672</div>
      <div class="color-block" style="background-color: #f5cb97">#f5cb97</div>
      <div class="color-block" style="background-color: #fadfc0">#fadfc0</div>
      <div class="color-block" style="background-color: #fbe9d4">#fbe9d4</div>
      <div class="color-block" style="background-color: #fef5ea">#fef5ea</div>
    </div>
  </div>
  <hr />
  <div class="contain">
    <div class="first" style="background-color: #f56c6c">
      <div>危险：#f56c6c</div>
    </div>
    <div class="second">
      <div class="color-block" style="background-color: #c44c4e">#c44c4e</div>
      <div class="color-block" style="background-color: #ff8d8f">#ff8d8f</div>
      <div class="color-block" style="background-color: #ffadae">#ffadae</div>
      <div class="color-block" style="background-color: #ffcdce">#ffcdce</div>
      <div class="color-block" style="background-color: #ffdede">#ffdede</div>
      <div class="color-block" style="background-color: #ffeeee">#ffeeee</div>
    </div>
  </div>
  <hr />
  <div class="contain">
    <div class="first" style="background-color: #909399">
      <div>信息：#909399</div>
    </div>
    <div class="second">
      <div class="color-block" style="background-color: #676b6e">#676b6e</div>
      <div class="color-block" style="background-color: #a7aaaf">#a7aaaf</div>
      <div class="color-block" style="background-color: #c1c2c5">#c1c2c5</div>
      <div class="color-block" style="background-color: #d9dadb">#d9dadb</div>
      <div class="color-block" style="background-color: #e6e6e8">#e6e6e8</div>
      <div class="color-block" style="background-color: #f2f2f3">#f2f2f3</div>
    </div>
  </div>
  <hr />
</template>

<style lang="scss" scoped>
.contain {
  display: flex;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
  .first {
    width: 20%;
    height: 100px;
    line-height: 100px;
    text-align: center;

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
