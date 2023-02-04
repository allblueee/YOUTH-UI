<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import offset from './offset.vue'
</script>

# 布局

<p>通过基础的 24 分栏，迅速简便地创建布局</p>

## 基础用法

<p>使用单一分栏创建基础的栅格布局</p>
<Preview comp-name="Layout" demo-name="demo">
  <demo />
</Preview>

## 位置偏移

<p>通过 offset 设置偏移占用指定的列数</p>
<Preview comp-name="Layout" demo-name="offset">
  <offset />
</Preview>

## 属性

|   参数   |     说明     |  类型  | 默认值 | 可选值 |
| :------: | :----------: | :----: | :----: | :----: |
|  `span`  | 每行占用列数 | string |   24   |   --   |
| `offset` | 偏移指定列数 | string |   0    |   --   |
