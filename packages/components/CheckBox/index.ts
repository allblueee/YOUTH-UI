import { App, Plugin } from 'vue';
import CheckBox from './src/index.vue';
import CheckBoxGroup from './src/checkbox-group.vue';
import CheckBoxButton from './src/checkbox-button.vue';

export const CheckBoxPlugin: Plugin = {
  install(app: App) {
    app.component('y-checkbox', CheckBox);
    app.component('y-checkbox-group', CheckBoxGroup);
    app.component('y-checkbox-button', CheckBoxButton);
  },
};

export { CheckBox };
