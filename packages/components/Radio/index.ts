import { App, Plugin } from 'vue';
import Radio from './src/index.vue';
import RadioGroup from './src/radio-group.vue';

export const RadioPlugin: Plugin = {
  install(app: App) {
    app.component('y-radio', Radio);
  },
};

export const RadioGroupPlugin: Plugin = {
  install(app: App) {
    app.component('y-radio-group', RadioGroup);
  },
};

export { Radio };
export { RadioGroup };
