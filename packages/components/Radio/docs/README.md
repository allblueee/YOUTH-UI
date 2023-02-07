<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 单选框

这是一个单选框

## 基础用法

<Preview comp-name="Radio" demo-name="demo">
  <demo />
</Preview>

## 属性

|    参数    |      说明      |      类型       | 可选值 | 默认值 | 是否必填 |
| :--------: | :------------: | :-------------: | :----: | :----: | :------: |
|  `label`   | Radio 的 value | string\| number |   -    |   -    |    是    |
| `v-model`  |   选中状态值   | string\| number |   -    |   -    |    是    |
| `disabled` |    是否禁用    |     boolean     |   -    | false  |    否    |
|   `name`   | 原生 name 属性 |     string      |   -    |   -    |    否    |

## 事件

| 事件名  |   说明   | 参数列表 |     参数说明     |
| :-----: | :------: | :------: | :--------------: |
| `click` | 点击事件 |  $event  | 原生的 dom event |
