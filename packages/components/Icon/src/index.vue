<template>
  <i class="y-icon" :style="style">
    <slot />
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps({
  size: String,
  color: String,
});
const style = computed(() => {
  const { size, color } = props;
  if (!size && !color) return {};

  return {
    fontSize: size,
    color,
  };
});
</script>

<style scoped>
.y-icon {
}
</style>
