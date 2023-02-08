import Icon from './src/index.vue';
import type { App, Plugin } from 'vue';

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('y-icon', Icon);
  },
};

export { Icon };
