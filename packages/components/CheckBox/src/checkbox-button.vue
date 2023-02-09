<template>
  <label
      class="el-checkbox"
      :class="[
          { 'is-checked': isChecked },
          { 'is-disabled': isDisabled },
          { 'is-bordered': border },
      ]"
  >
      <span class="el-checkbox__input"
          :class="{
              'is-checked': isChecked,
              'is-disabled': isDisabled,
              'is-indeterminate': indeterminate,
          }"
      >
          <span class="el-checkbox__inner"></span>
          <input
              ref="checkbox"
              class="el-checkbox__original"
              type="checkbox"
              :value="label"
              v-model="model"
              :disabled="isDisabled"
              @change="handleChange"
          >
      </span>
      <span class="el-checkbox__label" v-if="$slots.default || label">
          <slot></slot>
          <template v-if="!$slots.default">{{label}}</template>
      </span>
  </label>
</template>

<script>
export default {
  // mixins: [Emitter],
  props: {
      value: {},
      label: {},
      disabled: Boolean,
      indeterminate: Boolean,
      border: Boolean,
  },
  data() {
    return {
      isLimitExceeded: false
    };
  },
  computed: {
      model: {
          get() {
              return this.isGroup() ? this.store : this.value
          },
          set(val) {
              if (this.isGroup()) {
                  this.isLimitExceeded = false;

                  (this._checkboxGroup.min !== undefined &&
                  val.length < this._checkboxGroup.min &&
                      (this.isLimitExceeded = true));

                  (this._checkboxGroup.max !== undefined &&
                  val.length > this._checkboxGroup.max &&
                      (this.isLimitExceeded = true));

                  this.isLimitExceeded === false &&
                      this.dispatch('ElCheckboxGroup', 'input', [val]);
              } else {
                  this.$emit('input', val);
              }
          }
      },
      isChecked() {
          if ({}.toString.call(this.model) === '[object Boolean]') {
              return this.model;
          } else if (Array.isArray(this.model)) {
              return this.model.indexOf(this.label) > -1;
          } 
          return false;
      },
      isDisabled() {
          return this.isGroup() 
              ? this._checkboxGroup.disabled || this.disabled || this.isLimitDisabled  : this.disabled;
      },
      store() {
          return this._checkboxGroup ? this._checkboxGroup.value : this.value;
      },
      isLimitDisabled() {
          const { max, min } = this._checkboxGroup;
          return !!(max || min) &&
          (this.model.length >= max && !this.isChecked) ||
          (this.model.length <= min && this.isChecked);
      },
  },
  methods: {
      handleChange(ev) {
          if (this.isLimitExceeded) return;

          this.$emit('change', ev.target.checked, ev);
          this.$nextTick(() => {
              if (this.isGroup()) {
                  this.dispatch('ElCheckboxGroup', 'change', [this._checkboxGroup.value]);
              }
          });
      },

      isGroup() {
          let parent = this.$parent;
          while (parent) {
              if (parent.$options.componentName !== 'ElCheckboxGroup') {
                  parent = parent.$parent;
              } else {
                  this._checkboxGroup = parent;
                  return true;
              }
          }
          return false;
      },
  },
}
</script>