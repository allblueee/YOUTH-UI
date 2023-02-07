<template>
  <div>
    <y-radio label="0" v-model="lang">python</y-radio>
    <y-radio label="1" v-model="lang">javascript</y-radio>
    <y-radio label="2" v-model="lang">C++</y-radio>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      lang: '',
    };
  },
};
</script>
