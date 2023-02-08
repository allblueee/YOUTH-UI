import { createApp } from 'vue';
import YIcons from '@youth-ui/icons-vue/global';
import Youth from '../packages/components';
import App from './App.vue';
import router from './router';

import './assets/markdown.css';

import Preview from './components/Preview.vue';

const app = createApp(App);
app.component('Preview', Preview);
app.use(Youth).use(router).use(YIcons).mount('#app');
