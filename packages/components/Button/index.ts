import Button from './src/index.vue';
import ButtonGroup from './src/button-group.vue';
import type { App, Plugin } from 'vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('YButton', Button);
    app.component('YButtonGroup', ButtonGroup);
  },
};

export { Button };
