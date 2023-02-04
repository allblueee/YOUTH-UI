<template>
  <y-row>
    <y-col :span="10"><div class="dark">10</div></y-col>
    <y-col :span="12" :offset="2"><div class="light">12</div></y-col>
  </y-row>
  <y-row>
    <y-col :span="8"><div class="dark">8</div></y-col>
    <y-col :span="8" :offset="8"><div class="light">8</div></y-col>
  </y-row>
  <y-row>
    <y-col :span="2"><div class="dark">2</div></y-col>
    <y-col :span="6" :offset="4"><div class="light">6</div></y-col>
    <y-col :span="6" :offset="6"><div class="dark">6</div></y-col>
  </y-row>
  <y-row>
    <y-col :span="4"><div class="dark">4</div></y-col>
    <y-col :span="2" :offset="4"><div class="light">2</div></y-col>
    <y-col :span="4" :offset="2"><div class="dark">4</div></y-col>
    <y-col :span="6" :offset="2"><div class="light">6</div></y-col>
  </y-row>
</template>
<style lang="scss" scoped>
.dark {
  height: 30px;
  border-radius: 5px;
  background: #99a9bf;
}
.light {
  height: 30px;
  border-radius: 5px;
  background: #d5dce5;
}
.y-row {
  margin-bottom: 15px;
  text-align: center;
  font-weight: 800;
}
</style>
