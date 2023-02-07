<template>
  <div class="y-radio" @click="handleChange" :class="classes">
    <span class="y-radio-input" :class="classes"></span>
    <span class="y-radio-label" :class="classes">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useRadio, radioProps, radioEmits } from './radio';
import { defineProps, defineEmits, onMounted } from 'vue';

const props = defineProps(radioProps);
const emits = defineEmits(radioEmits);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { modelValue, label, size, disabled, classes, checked } = useRadio(props, emits);

// 在页面加载的时候运行checkischecked方法
onMounted(() => {
  if (checked.value && !disabled.value) {
    modelValue.value = props.label;
  }
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleChange = () => {
  if (!disabled.value) {
    modelValue.value = props.label;
  }
};
</script>

<script lang="ts">
export default {
  name: 'YRadio',
};
</script>

<style lang="scss">
$checked-color: #409eff;

$large-size: 16px;
$default-size: 14px;
$small-size: 12px;

$large-inner-size: 10px;
$default-inner-size: 8px;
$small-inner-size: 6px;

$large-height: 40px;
$default-height: 32px;
$small-height: 24px;

.y-radio {
  cursor: pointer;
  margin-right: 32px;
  display: inline-flex;
  align-items: center;
  height: $default-height;
  position: relative;

  &.is-bordered {
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    padding: 0 14px;
    &.is-checked:not(.is-disabled) {
      color: $checked-color;
      border: 1px solid $checked-color;
    }
  }
  &.y-radio-small {
    height: $small-height;
    &.is-bordered:not(.is-disabled) {
      padding: 0 10px;
    }
  }

  &.y-radio-large {
    height: $large-height;
    &.is-bordered:not(.is-disabled) {
      padding: 0 18px;
    }
  }

  &.is-disabled {
    cursor: not-allowed;
    color: #c2c2c2;
  }

  > .y-radio-input {
    width: $default-size;
    height: $default-size;
    display: inline-flex;
    box-shadow: #e0e0e6 0px 0px 0px 1px;
    border-radius: 100%;
    position: relative;

    &.y-radio-small {
      height: $small-size;
      width: $small-size;
      &:before {
        left: calc($small-size / 2 - $small-inner-size / 2);
        top: calc($small-size / 2 - $small-inner-size / 2);
        width: $small-inner-size;
        height: $small-inner-size;
      }
    }

    &.y-radio-large {
      height: $large-size;
      width: $large-size;
      &:before {
        left: calc($large-size / 2 - $large-inner-size / 2);
        top: calc($large-size / 2 - $large-inner-size / 2);
        width: $large-inner-size;
        height: $large-inner-size;
      }
    }

    &.is-checked {
      box-shadow: $checked-color 0px 0px 0px 1px;

      &:before {
        opacity: 1;
        transform: scale(1);
      }
    }

    &:before {
      content: ' ';
      opacity: 0;
      position: absolute;
      left: calc($default-size / 2 - $default-inner-size / 2);
      top: calc($default-size / 2 - $default-inner-size / 2);
      width: $default-inner-size;
      height: $default-inner-size;
      background-color: $checked-color;
      border-radius: 50%;
      transform: scale(0.8);
      transition: opacity 300ms ease-in-out, background-color 300ms ease-in-out,
        transform 300ms ease-in-out;
    }

    &.is-disabled {
      background-color: #fafafc;
      box-shadow: #e0e0e6 0px 0px 0px 1px;

      &:before {
        background-color: #c0c4cc;
      }
    }

    &:not(.is-disabled):hover {
      box-shadow: $checked-color 0px 0px 0px 1px;
    }
  }

  > .y-radio-label {
    padding-left: 8px;
    user-select: none;
    font-size: $default-size;

    &.y-radio-large {
      font-size: $large-size;
    }

    &.y-radio-small {
      font-size: $small-size;
    }
  }
}
</style>
