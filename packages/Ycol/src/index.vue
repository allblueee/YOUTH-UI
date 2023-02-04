<template>
  <div class="y-col"><slot></slot></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
  span: {
    type: Number,
    default: 24,
  },
  offset: {
    type: Number,
    default: 0,
  },
});
const width = ref(
  props.span <= 24 ? (props.span % 1 == 0 ? (100 / 24) * props.span + '%' : '') : '',
);
const offset = ref(
  props.offset <= 24 ? (props.offset % 1 == 0 ? (100 / 24) * props.offset + '%' : '') : '',
);
onMounted(() => {
  console.log('col组件', props.span, props.offset);
});
</script>

<style lang="scss" scoped>
.y-col {
  width: v-bind(width);
  float: left;
  margin-left: v-bind(offset);
}
</style>
