import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/markdown.css';

import Youth from '../packages/components';
import Preview from './components/Preview.vue';

import YIcons from "@youth-ui/icons-vue/global"

const app = createApp(App);
app.component('Preview', Preview);
app.use(Youth).use(router).use(YIcons).mount('#app');
