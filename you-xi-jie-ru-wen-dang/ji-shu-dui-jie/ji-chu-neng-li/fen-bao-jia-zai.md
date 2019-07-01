# 分包加载

## 触发分包加载

```javascript
    LoadSubpackageTask loadSubpackage(Object object)
```

_参数_

* Object object: 分包加载参数和回调函数

_Object 参数_

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| name | string | 是 | 分包的名字或入口， 需要和分包配置中的值对应 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

_返回值_

* LoadSubpackageTask: 加载分包任务实例，用于获取分包加载状态



## 加载分包任务实例

```javascript
    LoadSubpackageTask
```

用于获取分包加载状态

_方法_

* onProgressUpdate: 监听分包加载进度变化事件

## 监听分包加载进度变化事件

```javascript
    LoadSubpackageTask.onProgressUpdate(function callback)
```

_参数_

* callback: 监听事件的回调函数

_callback 回调函数参数_

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| progress | number | 分包下载进度百分比 |
| totalBytesWritten | number | 已经下载的数据长度，单位 Bytes |
| totalBytesExpectedToWrite | number | 预期需要下载的数据总长度，单位 Bytes |

