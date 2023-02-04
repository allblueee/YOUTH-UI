import { App, Plugin } from 'vue';
import Yrow from './src/index.vue';

export const YrowPlugin: Plugin = {
  install(app: App) {
    app.component('y-row', Yrow);
  },
};

export {
  Yrow,
};
