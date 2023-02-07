<template>
  <div style="width: 100%">
    <y-radio v-model="radio1" label="1" disabled>选项1</y-radio>
    <y-radio v-model="radio1" label="2">选项2</y-radio>
    <y-radio v-model="radio1" label="3">选项3</y-radio>
  </div>
  <div style="width: 100%">
    <y-radio-group v-model="radio2">
      <y-radio label="1">选项1</y-radio>
      <y-radio label="2" disabled>选项2</y-radio>
      <y-radio label="3">选项3</y-radio>
    </y-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const radio1 = ref('');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const radio2 = ref('');
</script>
