<template>
  <div class="youth-doc">
    <aside>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{
        link.name
      }}</router-link>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import ComponentList from 'packages/components/list.json';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = reactive({
  links: ComponentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
  })),
});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
.youth-doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>
