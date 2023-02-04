<script setup>
import demo from './demo.vue'
import btnDisabled from './disabled.vue'
import btnText from './text.vue'
import btnSize from './size.vue'
import btnGroup from './btnGroup.vue'
</script>

# Button 按钮组件

<p> 常用的操作按钮 </p>

## 基础用法

<p>基础的按钮用法</p>
<Preview comp-name="Button" demo-name="demo">
<demo />
</Preview>

## 禁用状态

<p>按钮的不可用状态</p>
<p>你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。</p>
<Preview comp-name="Button" demo-name="disabled">
  <btnDisabled />
</Preview>

## 文字按钮

<p>无边框和背景色的按钮</p>
<Preview comp-name="Button" demo-name="text">
  <btnText />
</Preview>

## 不同尺寸

<p>Button组件提供除了默认尺寸以外的两种尺寸，可以适用用户在不同场景下的需求</p>
<p>默认尺寸是 <code>medium</code>，另外两种尺寸分别是：<code>large</code>和<code>small</code>。</p>
<Preview comp-name="Button" demo-name="size">
  <btnSize />
</Preview>

## 按钮组

<p>按钮组</p>
<Preview comp-name="Button" demo-name="btnGroup">
  <btnGroup />
</Preview>
