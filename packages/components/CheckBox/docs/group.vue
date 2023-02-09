<template>
  <div>
    <y-checkbox-group v-model:value="value">
      <y-checkbox label="北京"></y-checkbox>
      <y-checkbox label="上海"></y-checkbox>
      <y-checkbox label="广州"></y-checkbox>
      <y-checkbox label="深圳"></y-checkbox>
    </y-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ['北京'],
    };
  },
};
</script>
