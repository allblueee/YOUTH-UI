// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { computed, ref } from 'vue';

export const selectProps = {
  modelValue: {
    type: [String, Number, Boolean, Object],
  },
  options: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '请选择',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
};

export const selectEmits = ['update:modelValue', 'change', 'clear'];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useSelect = (props: any, emits: any) => {
  const options = computed(() => props.options);
  // const clearable = computed(() => props.clearable && !props.disabled);
  const clearable = computed({
    get: () => props.clearable && !props.disabled,
    set: () => {},
  });
  const closeVisible = ref(clearable);
  // const closeVisible = ref(false);
  const multiple = computed(() => props.multiple);

  const modelValue = computed(() => props.modelValue);
  const modelLabel = computed({
    get() {
      if (!multiple.value) {
        const item = props.options.find((v: any) => v.value === props.modelValue);
        return item ? item.label : '';
      } else {
        return props.options
          .filter((v: any) => modelValue.value.includes(v.value))
          .map((v: any) => v.label);
      }
    },
    set() {},
  });

  const disabled = computed(() => props.disabled);

  const placeholder = computed(() => props.placeholder);

  return {
    options,
    modelValue,
    modelLabel,
    disabled,
    placeholder,
    clearable,
    closeVisible,
    multiple,
  };
};
