<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 单选框

- 使用 `vue3`+`typescript`实现的单选框组件
- 实现了基本的单选框功能,支持禁用,大小,边框等属性，支持 v-model 双向绑定
- 支持单选框组，支持单选框组的禁用，支持单选框组的默认选中值

## 基础用法

<Preview comp-name="Radio" demo-name="demo">
  <demo />
</Preview>

## 属性

|    参数    |      说明      |           类型           |        可选值         | 默认值  | 是否必填 |
| :--------: | :------------: | :----------------------: | :-------------------: | :-----: | :------: |
| `v-model`  |   选中状态值   | string\| number\|boolean |           -           |    -    |    是    |
|  `label`   | Radio 的 value | string\| number\|boolean |           -           |    -    |    是    |
| `disabled` |    是否禁用    |         boolean          |           -           |  false  |    否    |
|   `size`   |  Radio 的大小  |          string          | large / default/smale | default |    否    |
| `bordered` |  是否显示边框  |         boolean          |           -           |  false  |    否    |
| `checked`  |  是否默认选中  |         boolean          |           -           |  false  |    否    |

## 事件

|  事件名  |          说明          | 参数列表 |    参数说明     |
| :------: | :--------------------: | :------: | :-------------: |
| `change` | 绑定值变化时触发的事件 |  $event  | 对应的 label 值 |
