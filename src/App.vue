<template>
  <div class="youth-doc">
    <aside>
      <img src="./assets/Youth-UI.jpeg" alt="YOUTH-UI的logo" class="logo" @click="gotoHome" />
      <hr />
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
import { useRouter } from 'vue-router';

const router = useRouter();
const data = reactive({
  links: ComponentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
  })),
});
const gotoHome = () => {
  router.push('/');
};
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
  .logo {
    width: 120px;
    margin: 0 auto;
    cursor: pointer;
  }
}
</style>
