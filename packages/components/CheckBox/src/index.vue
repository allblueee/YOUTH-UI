<template>
  <div
    class="y-checkbox"
    :class="[
      disabled || isLimitDisabled ? 'y-checkbox-disabled' : '',
      bordered ? 'y-checkbox-border' : '',
    ]"
  >
    <input
      class="y-checkbox-input"
      :class="[indeterminate ? 'is-indeterminate' : '']"
      type="checkbox"
      :value="label"
      :name="name"
      v-model="model"
      :disabled="disabled"
    />
    <span class="y-checkbox-text"
      ><slot></slot> <template v-if="!$slots.default">{{ label }}</template></span
    >
  </div>
</template>

<script lang="ts">
export default {
  inject: {
    CheckboxGroup: {
      default: '',
    },
  },
  props: {
    // 父组件传来的值，Boolean
    value: {
      type: Boolean,
      default: false,
    },
    // 父组件传进来的label，String类型，作为子组件元素input的value值
    label: {
      type: String,
      default: '',
    },
    // 父组件传的name，String类型，用作子组件的name
    name: {
      type: String,
      default: '',
    },
    disabled: {
      required: false,
      default: false,
      type: Boolean,
    },
    bordered: {
      required: false,
      default: false,
      type: Boolean,
    },
    onChange: {
      required: false,
      default: undefined,
      type: Function,
    },
    indeterminate: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  emits: ['update:value'],
  data() {
    return {
      // 超过限制
      isLimitExceeded: false,
    };
  },
  computed: {
    isGroup(): Boolean {
      return !!this.CheckboxGroup;
    },
    isChecked() {
      // 如果到max则checked的可以，若为min则checked不可以
      const arr = JSON.parse(JSON.stringify(this.CheckboxGroup.value));
      return !(arr.indexOf(this.label) == -1);
    },
    isLimitDisabled() {
      const { max, min } = this.CheckboxGroup;
      if (max || min) {
        if (this.model.length >= max) {
          return !this.isChecked;
        }
        if (this.model.length <= min) {
          return this.isChecked;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value: any) {
        console.log('set', this.isLimitDisabled);
        console.log(this.isGroup, value, this.indeterminate);
        this.isGroup
          ? this.CheckboxGroup.$emit('update:value', value)
          : this.$emit('update:value', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.y-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;

  .y-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1.5;
    position: relative;
    vertical-align: middle;
  }

  .y-checkbox-text {
    padding: 0 8px;
    font-size: 14px;
    font-weight: 500;
    vertical-align: text-top;
    color: #000;
  }

  .is-indeterminate {
    font-size: 14px;
  }

  input[type='checkbox'] {
    cursor: pointer;
    font-size: 14px;
    width: 16px;
    height: 16px;
    position: relative;
  }

  input[type='checkbox']:after {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    content: ' ';
    color: #fff;
    display: inline-block;
    visibility: visible;
    padding: 0px 3px;
    border-radius: 3px;
    background: #fff;
    border: 0;
    box-sizing: border-box;
    border: 1px solid #6d9ffe;
  }

  input[type='checkbox']:checked:after {
    content: '✔';
    font-size: 12px;
    font-weight: 600;
    background-color: #6d9ffe;
    border: none;
  }

  input[type='checkbox']:checked {
    + span {
      color: #6d9ffe;
    }
  }
}

.y-checkbox-disabled {
  cursor: not-allowed;

  .y-checkbox-input {
    background-color: #c5c7cf;
    border: #000;
    border-width: 2px;
  }

  .y-checkbox-text {
    padding: 0 8px;
    font-size: 14px;
    vertical-align: text-top;
    color: #c5c7cf;
  }

  input[type='checkbox'] {
    cursor: not-allowed;
    font-size: 14px;
    width: 16px;
    height: 16px;
    position: relative;
  }

  input[type='checkbox']:after {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    content: ' ';
    color: #fff;
    display: inline-block;
    visibility: visible;
    padding: 0px 3px;
    border-radius: 3px;
    background: #fff;
    border: 0;
    box-sizing: border-box;
    border: 1px solid #dddfe6;
  }

  input[type='checkbox']:checked {
    + span {
      color: #000;
    }
  }

  input[type='checkbox']:checked:after {
    content: '\2713';
    font-size: 12px;
    font-weight: 600;
    color: #c1c4cc;
    background-color: #f3f6fc;
    border: none;
  }
}

.y-checkbox-border {
  border-color: #000;
  border-width: 2px;
  border-radius: 3px;
}
</style>
