# 界面

## 键盘

```javascript
    hideKeyboard(Object object)
```

隐藏键盘

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    onKeyboardInput(function callback)
```

监听键盘输入事件

_参数_

* function callback

监听事件的回调函数

* callback 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| value | Object | 键盘输入的当前值 |

```javascript
    offKeyboardInput(function callback)
```

取消监听键盘输入事件

_参数_

* function callback

取消监听事件的回调函数

```javascript
    onKeyboardConfirm(function callback)
```

监听用户点击键盘 Confirm 按钮时的事件

_参数_

* function callback

监听事件的回调函数

* callback 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| value | string | 键盘输入的当前值 |

```javascript
    offKeyboardConfirm(function callback)
```

取消监听用户点击键盘 Confirm 按钮时的事件

_参数_

* function callback

取消监听事件的回调函数

```javascript
    onKeyboardComplete(function callback)
```

监听监听键盘收起的事件

_参数_

* function callback

监听事件的回调函数

* callback 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| value | string | 键盘输入的当前值 |

```javascript
    offKeyboardComplete(function callback)
```

取消监听监听键盘收起的事件

_参数_

* function callback

取消监听事件的回调函数

```javascript
    showKeyboard(Object object)
```

显示键盘

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| defaultValue | string | 否 | 键盘输入框显示的默认值 默认为空字符串 |
| maxLength | number | 否 | 键盘中文本的最大长度 默认值为 100 |
| multiple | boolean | 否 | 是否为多行输入 默认值为 false |
| confirmHold | boolean | 否 | 当点击完成时键盘是否收起 false: 收起 true: 不收起 默认值为 true |
| confirmType | string | 否 | 键盘右下角 confirm 按钮的类型 支持的值为 done next search go send 默认值为 done |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

* object.confirmType 的合法值

| 值 | 说明 |
| :--- | :--- |
| done | 完成 |
| next | 下一个 |
| search | 搜索 |
| go | 前往 |
| send | 发送 |

