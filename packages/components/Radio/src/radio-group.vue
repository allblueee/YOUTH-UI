<template>
  <div ref="radioGroupRef" class="y-radio-group" role="radiogroup">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, toRefs, defineProps, defineEmits } from 'vue';
import { radioGroupProps, radioGroupEmits } from './radio-grop';

const props = defineProps(radioGroupProps);
const emits = defineEmits(radioGroupEmits);

const changeEvent = (value: any) => {
  emits('update:modelValue', value);
  emits('change', value);
};

provide(
  'radioGroupKey',
  reactive({
    ...toRefs(props),
    changeEvent,
  }),
);
</script>
<script lang="ts">
export default {
  name: 'YRadioGroup',
};
</script>

<style scoped></style>
