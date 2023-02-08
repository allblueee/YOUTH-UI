<template>
  <input class="y-input" />
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.y-input {
  padding: 4px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  color: #000000d9;
  font-size: 14px;
  &:hover,
  :active {
    // border: 1px solid #40a9ff !important;
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
  // :focus {
  //   border-color: #40a9ff;
  //   box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
  //   border-right-width: 1px !important;
  //   outline: 1px solid #40a9ff !important;
  // }
}
:focus-visible {
  outline-offset: 0;
  outline: 1px solid #40a9ff !important;
  box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
}
</style>
