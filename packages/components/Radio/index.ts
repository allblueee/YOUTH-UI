import { App, Plugin } from 'vue';
import Radio from './src/index.vue';

export const RadioPlugin: Plugin = {
  install(app: App) {
    app.component('y-radio', Radio);
  },
};

export { Radio };
