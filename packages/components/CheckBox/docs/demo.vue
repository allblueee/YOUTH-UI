<template>
  <div>
    <y-checkbox v-model:value="active">默认</y-checkbox>
    <y-checkbox v-model:value="checked">选中</y-checkbox>
    <y-checkbox :value="active" bordered>选中</y-checkbox>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: false,
      checked: true,
    };
  },
};
</script>