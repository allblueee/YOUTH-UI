import * as icons from './components';
import type { App } from 'vue';
export interface InstallOptions {
    /** @default `YIcon` */
    prefix?: string;
}
declare const _default: (app: App, { prefix }?: InstallOptions) => void;
export default _default;
export { icons };
export * from './components';
