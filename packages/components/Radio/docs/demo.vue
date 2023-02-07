<template>
  <!-- radio组件的基础用法 -->
  <span style="margin: 20px; color: black">radio组件的基础用法</span>
  <div>
    <y-radio v-model="radio1" label="1" checked @change="event($event)">选项1</y-radio>
    <y-radio v-model="radio1" label="2" @change="event($event)">选项2</y-radio>
    <y-radio v-model="radio1" label="3" @change="event($event)">选项3</y-radio>
    <y-radio v-model="radio1" label="4" @change="event($event)">选项4</y-radio>
    <y-radio v-model="radio1" label="5" @change="event($event)">选项5</y-radio>
  </div>
  <!-- 展示当前选中哪个选项 -->
  <span style="margin: 20px; color: black">当前选中的选项是：{{ radio1 }}</span>
  <p style="height: 10px"></p>

  <!-- radio组件的禁用状态 -->
  <span style="margin: 20px; color: black">radio组件的禁用状态</span>
  <div>
    <y-radio v-model="radio2" label="1" disabled checked @change="event($event)">选项1</y-radio>
    <y-radio v-model="radio2" label="2" disabled @change="event($event)">选项2</y-radio>
    <y-radio v-model="radio2" label="3" @change="event($event)">选项3</y-radio>
    <y-radio v-model="radio2" label="4" @change="event($event)">选项4</y-radio>
    <y-radio v-model="radio2" label="5" @change="event($event)">选项5</y-radio>
  </div>
  <span style="margin: 20px; color: black">当前选中的选项是：{{ radio2 }}</span>
  <p style="height: 10px"></p>

  <!-- radio组件的size属性 -->
  <span style="margin: 20px; color: black">radio组件的size属性</span>
  <div>
    <y-radio v-model="radio3" label="1" size="large" @change="event($event)">选项1</y-radio>
    <y-radio v-model="radio3" label="2" size="large" @change="event($event)">选项2</y-radio>
    <y-radio v-model="radio3" label="3" size="large" @change="event($event)">选项3</y-radio>
    <y-radio v-model="radio3" label="4" size="large" @change="event($event)">选项4</y-radio>
    <y-radio v-model="radio3" label="5" size="large" @change="event($event)">选项5</y-radio>
  </div>
  <div>
    <y-radio v-model="radio4" label="1" @change="event($event)">选项1</y-radio>
    <y-radio v-model="radio4" label="2" @change="event($event)">选项2</y-radio>
    <y-radio v-model="radio4" label="3" @change="event($event)">选项3</y-radio>
    <y-radio v-model="radio4" label="4" @change="event($event)">选项4</y-radio>
    <y-radio v-model="radio4" label="5" @change="event($event)">选项5</y-radio>
  </div>
  <div>
    <y-radio v-model="radio5" label="1" size="small" @change="event($event)">选项1</y-radio>
    <y-radio v-model="radio5" label="2" size="small" @change="event($event)">选项2</y-radio>
    <y-radio v-model="radio5" label="3" size="small" @change="event($event)">选项3</y-radio>
    <y-radio v-model="radio5" label="4" size="small" @change="event($event)">选项4</y-radio>
    <y-radio v-model="radio5" label="5" size="small" @change="event($event)">选项5</y-radio>
  </div>
  <span style="margin: 20px; color: black"
    >当前选中的选项是：large:{{ radio3 }}&emsp;&emsp;default:{{ radio4 }}&emsp;&emsp;small:{{
      radio5
    }}</span
  >
  <p style="height: 10px"></p>

  <!-- radio组件的边框 -->
  <span style="margin: 20px; color: black">radio组件的边框</span>
  <div>
    <y-radio v-model="radio6" label="1" border @change="event($event)">选项1</y-radio>
    <y-radio v-model="radio6" label="2" checked border @change="event($event)">选项2</y-radio>
    <y-radio v-model="radio6" label="3" border @change="event($event)">选项3</y-radio>
    <y-radio v-model="radio6" label="4" border @change="event($event)">选项4</y-radio>
    <y-radio v-model="radio6" label="5" border @change="event($event)">选项5</y-radio>
  </div>
  <span style="margin: 20px; color: black">当前选中的选项是：{{ radio6 }}</span>
  <p style="height: 10px"></p>

  <!-- radio-group组件的基础用法 -->
  <span style="margin: 20px; color: black">radio-group组件的用法</span>
  <div>
    <y-radio-group v-model="radio7" @change="event($event)">
      <y-radio label="1" disabled>选项1</y-radio>
      <y-radio label="2" disabled>选项2</y-radio>
      <y-radio label="3" checked>选项3</y-radio>
      <y-radio label="4">选项4</y-radio>
      <y-radio label="5">选项5</y-radio>
    </y-radio-group>
    <span style="margin: 20px; color: black">当前选中的选项是：{{ radio7 }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const radio1 = ref('');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const radio2 = ref('');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const radio3 = ref('');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const radio4 = ref('');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const radio5 = ref('');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const radio6 = ref('');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const radio7 = ref('');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const event = (e: any) => {
  // eslint-disable-next-line no-console
  console.log(e);
};
</script>
