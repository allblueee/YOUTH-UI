/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { InputPlugin } from './Input';
import { IconPlugin } from './Icon';

const YouthPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    InputPlugin.install?.(app);
    IconPlugin.install?.(app);
  },
};

export default YouthPlugin;

export * from './Button'
export * from './Input'
export * from './Icon'