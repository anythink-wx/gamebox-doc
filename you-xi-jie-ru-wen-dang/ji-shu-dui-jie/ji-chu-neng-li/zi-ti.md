# 字体

## 文本行高

```javascript
    Number getTextLineHeight(Object object)
```

_**支持版本: \(core 版本 &gt;= 1.0.2\)**_

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| fontStyle | string | 否 | normal | 字体样式 |
| fontWeight | string | 否 | normal | 字重 |
| fontSize | number | 否 | 16 | 字号 |
| fontFamily | string | 是 |  | 字体名称 |
| text | string | 是 |  | 文本的内容 |
| success | function | 否 |  | 接口调用成功的回调函数 |
| fail | function | 否 |  | 接口调用失败的回调函数 |
| complete | function | 否 |  | 接口调用结束的回调函数 |

_返回值_

* Number: 给定文本的行高

## 加载自定义字体文件

```javascript
    string  loadFont(string path)
```

_**支持版本: \(core 版本 &gt;= 1.2.0\)**_

_参数_

* string path

| 属性 | 键值类型 | 是否必填 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| path | string | 是 |  | 字体文件路径 |

_返回值_

* string : 如果加载字体成功，则返回字体 family 值，否则返回 null。

