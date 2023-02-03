import { App, Plugin } from 'vue';
import Button from './src/index.vue';
import ButtonGroup from './src/button-group.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('y-button', Button);
    app.component('y-button-group', ButtonGroup);
  },
};

export { Button };
