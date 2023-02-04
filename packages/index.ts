/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { FooPlugin } from './Foo';
import { InputPlugin } from './Input';
import { YcolPlugin } from './Ycol';
import { YrowPlugin } from './Yrow';

const YouthPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    FooPlugin.install?.(app);
    InputPlugin.install?.(app);
    YcolPlugin.install?.(app);
    YrowPlugin.install?.(app);
  },
};

export default YouthPlugin;

export * from './Button'
export * from './Foo'
export * from './Input'
export * from './Ycol'
export * from './Yrow'