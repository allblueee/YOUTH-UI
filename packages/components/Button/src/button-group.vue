<template>
  <div class="y-button-group">
    <slot />
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.y-button-group {
  :deep .y-button {
    // float: left;
    position: relative;
    // background-color: green;
    margin-left: 0;

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right-width: 1px;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left-width: 1px;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
      border-right-width: 1px;
      border-left-width: 1px;
    }
    &:not(:last-child) {
      margin-right: -1px;
    }
    &:hover,
    &:focus,
    &:active {
      z-index: 1;
    }
  }
}
</style>
