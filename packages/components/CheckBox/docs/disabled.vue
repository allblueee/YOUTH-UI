<template>
  <div>
    <y-checkbox disabled>禁用</y-checkbox>
    <y-checkbox value disabled>禁用选中</y-checkbox>
    <y-checkbox value :disabled="disabled">禁用选中</y-checkbox>

  </div>
</template>

<script lang="ts">
export default {
    data(){
        return{
            disabled:true
        }
    }
};
</script>
