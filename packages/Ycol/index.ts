import { App, Plugin } from 'vue';
import Ycol from './src/index.vue';

export const YcolPlugin: Plugin = {
  install(app: App) {
    app.component('y-col', Ycol);
  },
};

export {
  Ycol,
};
