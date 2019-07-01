# 窗口

_**支持版本: \(core 版本 &gt;= 1.1.1\)**_

```javascript
    Object onWindowResize(function callback)
```

监听窗口尺寸变化事件

_参数_

* function callback 窗口尺寸变化事件的回调函数
* Object res 回调函数被调用时传入的参数

| 属性 | 类型 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- |
| windowWidth | number | 变化后的窗口宽度 |  |
| windowHeight | number | 变化后的窗口高度 |  |

```javascript
    offWindowResize(function callback)
```

取消监听窗口尺寸变化事件

_参数_

* function callback

  窗口尺寸变化事件的回调函数

