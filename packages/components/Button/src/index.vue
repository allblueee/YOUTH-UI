<template>
  <button
    class="y-button"
    :class="[
      `y-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
      `y-button--${size}`,
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span>
      <!-- 插槽 -->
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
// import { onMounted } from 'vue';
// 父子传值：withDefaults函数限定默认值
interface Props {
  type?: string;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  size?: string;
}
// const props =
withDefaults(defineProps<Props>(), {
  type: 'default',
  plain: false,
  round: false,
  circle: false,
  disabled: false,
  size: 'medium',
});

// onMounted(() => {
//   console.log(props.size);
// });
// eslint-disable-next-line no-undef
defineEmits(['click']);
</script>

<style scoped lang="scss">
.y-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 8px 16px;
  font-size: 13px;
  border-radius: 5px;
  &:hover:not(.is-disabled),
  &:focus {
    color: #409eff;
    border-color: transparent;
    background-color: #eef5fe;
  }
}

.y-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover:not(.is-disabled),
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.y-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover:not(.is-disabled),
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}

.y-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover:not(.is-disabled),
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}

.y-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover:not(.is-disabled),
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}

.y-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover:not(.is-disabled),
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}

// 朴素button样式
.y-button.is-plain {
  &:hover:not(.is-disabled),
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.y-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover:not(.is-disabled),
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.y-button--success.is-plain {
  color: #70c761;
  background: #edf8e9;
  &:hover:not(.is-disabled),
  &:focus {
    background: #70c761;
    border-color: #edf8e9;
    color: #fff;
  }
}

.y-button--info.is-plain {
  color: #85888e;
  background: #f2f2f3;
  &:hover:not(.is-disabled),
  &:focus {
    background: #85888e;
    border-color: #f2f2f3;
    color: #fff;
  }
}
.y-button--warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover:not(.is-disabled),
  &:focus {
    background: #e6a23c;
    border-color: #f5dab1;
    color: #fff;
  }
}

.y-button--danger.is-plain {
  color: #fe6164;
  background: #ffeeee;
  &:hover:not(.is-disabled),
  &:focus {
    background: #fe6164;
    border-color: #ffeeee;
    color: #fff;
  }
}

// round属性
.y-button.is-round {
  border-radius: 20px;
  padding: 9px 16px;
}

//circle属性
.y-button.is-circle {
  border-radius: 50%;
  padding: 8px;
}

// disabled属性
.y-button.is-disabled {
  opacity: 0.8;
  cursor: not-allowed;
}

// 文字按钮

.y-button--text {
  border-color: transparent;
  color: #409eff;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
  &:hover,
  &:focus {
    background: none;
  }
  & + .is-disabled {
    color: #a8abb6;
  }
}

// button组件尺寸
.y-button--large {
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.y-button--small {
  padding: 4px 8px;
}
</style>
