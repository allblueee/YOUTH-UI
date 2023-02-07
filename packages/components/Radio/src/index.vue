// 使用vue仿照element-ui的radio组件
<template>
  <div class="y-radio" :class="{ 'is-checked': model === label, 'is-disabled': disabled }">
    <label class="y-radio__label">
      <span class="y-radio__input">
        <span class="y-radio__inner"></span>
        <input
          class="y-radio__original"
          type="radio"
          :value="label"
          :name="name"
          :disabled="disabled"
          :checked="model === label"
          @change="handleChange($event)"
        />
      </span>
      <span class="y-radio__label">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineComponent, PropType, ref, watch } from 'vue';

// 定义props
export default defineComponent({
  name: 'YRadio',
  props: {
    label: {
      type: [String, Number],
      default: '',
    },
    disabled: Boolean,
    checked: Boolean,
    name: String,
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    // 定义model
    const model = ref(props.modelValue);

    // 监听modelValue的变化
    watch(
      () => props.modelValue,
      (val) => {
        model.value = val;
      },
    );

    // 监听model的变化
    watch(
      () => model.value,
      (val) => {
        emit('update:modelValue', val);
      },
    );

    // 监听model的变化
    // watch(
    //   () => model.value,
    //   (val) => {
    //     emit('change', val);
    //   },
    // );

    // 监听点击事件
    const handleChange = (e: any) => {
      if (props.disabled) return;
      model.value = props.label;
      // eslint-disable-next-line no-console
      console.log(e.target);
    };

    return {
      model,
      handleChange,
    };
  },
});
</script>

<!-- 定义样式 -->
<style lang="scss" scoped>
.y-radio {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  line-height: 1;
  color: #606266;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  .y-radio__label {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    .y-radio__input {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      width: 14px;
      height: 14px;
      border: 1px solid #c0c4cc;
      border-radius: 50%;
      background-color: #fff;
      -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      .y-radio__inner {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #409eff;
        opacity: 0;
        -webkit-transform: translate(-50%, -50%) scale(0);
        transform: translate(-50%, -50%) scale(0);
        -webkit-transition: -webkit-transform 0.1s ease, opacity 0.1s ease;
        transition: transform 0.1s ease, opacity 0.1s ease;
      }
    }
    .y-radio__original {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      opacity: 0;
      cursor: pointer;
    }
  }
  .y-radio__label {
    margin-left: 10px;
  }
  &:hover {
    .y-radio__input {
      border-color: #409eff;
    }
  }
  &.is-disabled {
    cursor: not-allowed;
    .y-radio__input {
      border-color: #c0c4cc;
      background-color: #ebeef5;
      cursor: not-allowed;
      .y-radio__inner {
        background-color: #c0c4cc;
      }
    }
    .y-radio__label {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  &.is-checked {
    .y-radio__input {
      border-color: #409eff;
      background-color: #409eff;
      .y-radio__inner {
        opacity: 1;
        -webkit-transform: translate(-50%, -50%) scale(1);
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}
</style>
