<template>
  <div>
    <span @change="handleCheckAllChange"
      ><y-checkbox v-model:value="checkedAll" :indeterminate="isIndeterminate"
        >全选</y-checkbox
      ></span
    >

    <y-checkbox-group v-model:value="value" @change="handleCheckedCitiesChange">
      <y-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</y-checkbox>
    </y-checkbox-group>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
// const isCheckedAll = ref(checkedAll);

export default {
  data() {
    return {
      checkedAll: false,
      value: ['北京'],
      isIndeterminate: true,
      cities: cityOptions,
    };
  },
  methods: {
    handleCheckedCitiesChange() {
      console.log('handleCheckedCitiesChange');
      this.checkedAll = this.value.length === this.cities.length;
      // this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    handleCheckAllChange(val) {
      console.log('handleCheckAllChange', val);
      this.value = this.value.length === cityOptions.length ? [] : cityOptions;
    },
  },
};
</script>
