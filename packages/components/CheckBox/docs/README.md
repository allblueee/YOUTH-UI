<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import disabled from './disabled.vue'
import group from './group.vue'
import indeterminate from './indeterminate.vue'
import limit from './limit.vue'

</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# CheckBox多选框

多选框,一组备选项中进行多选。

## 基础用法
<Preview comp-name="CheckBox" demo-name="demo">
  <demo />
</Preview>

## 禁用状态
<Preview comp-name="CheckBox" demo-name="disabled">
  <disabled />
</Preview>

## 多选框组
<Preview comp-name="CheckBox" demo-name="group">
  <group />
</Preview>

## indeterminate 状态
<Preview comp-name="CheckBox" demo-name="indeterminate">
  <indeterminate />
</Preview>

## 可选项目数量的限制
<Preview comp-name="CheckBox" demo-name="limit">
  <limit />
</Preview>

## 按钮样式
-button
## 带边框
修改样式
## 属性
### CheckBox
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
autoFocus	| 自动获取焦点 | boolean| - |false	| 否
checked	| 指定当前是否选中 | boolean| - |false	| 否
defaultChecked | 初始是否选中 | boolean| - |false	| 否
disabled | 失效状态	| boolean| - |false	| 否
indeterminate	| 设置 indeterminate 状态，只负责样式控制	| boolean| - |false	| 否
onChange | 变化时的回调函数	| function(e: CheckboxChangeEvent)| - |-| 否
### CheckBox Group
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
defaultValue	|默认选中的选项	|(string\|number)[] |[]	| - |否
disabled	|整组失效|	boolean	| - |false	|否
name	|CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性|string	|-	| - |否
options	|指定可选项	string[] | number[] \| Option[]|	[]	| - |否
value	|指定选中的选项	(string | number)[]|	[]	| - |否
onChange	|变化时的回调函数|	function(checkedValue)	|-| - |否
### CheckBox Button
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`arg1` | 第一个参数 | string | - | `default` | 否 
`arg2` | 第二个参数 | string | - | `default` | 否
## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三
