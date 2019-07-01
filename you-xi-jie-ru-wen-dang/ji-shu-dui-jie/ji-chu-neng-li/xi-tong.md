# 系统

## 生命周期

### 退出当前小游戏

```javascript
    exitApplication(Object object)
```

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| data | string/object | 否 | 退出游戏时返回的数据， 交给应用处理， Object类型会转为JSON |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    getLaunchOptionsSync()
```

返回小游戏启动参数

_返回值_

本接口支持以下类型的返回值:

* undefined
* string
* JSON object
* JSON array

具体的意义请参考渠道启动参数说明。

### 获取系统信息

```javascript
    getSystemInfo()
```

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| brand | string | 手机品牌 |
| model | string | 手机型号 |
| pixelRatio | number | 设备像素比 |
| screenWidth | number | 屏幕宽度 |
| screenHeight | number | 屏幕高度 |
| windowWidth | number | 可使用窗口宽度 |
| windowHeight | number | 可使用窗口高度 |
| language | string | 系统语言 |
| coreVersion | string | 客户端基础库版本 |
| system | string | 操作系统版本 |
| platform | string | 客户端平台 |

```javascript
   getSystemInfoSync()
```

**支持版本: \(core 版本 &gt;= 1.1.0\)** `getSystemInfo()`的同步版本，获取系统信息

### 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面等操作会触发此事件。



```javascript
    onHide(function callback)
```

_参数_

* function callback

监听事件的回调函数

### 取消监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。

```javascript
    offHide(function callback)
```

_参数_

* function callback

取消监听事件的回调函数

### 监听小游戏回到前台的事件

```javascript
    onShow(function callback)
```

_参数_

* function callback

监听事件的回调函数

### 取消监听小游戏回到前台的事件

```javascript
    offShow(function callback)
```

_参数_

* function callback

取消监听事件的回调函数

## 系统事件



```javascript
    onAudioInterruptionEnd(function callback)
```

监听音频中断结束，在收到 onAudioInterruptionBegin 事件之后，小游戏内所有音频会暂停，收到此事件之后才可再次播放成功

_参数_

* function callback

监听事件的回调函数

```javascript
    offAudioInterruptionEnd(function callback)
```

取消监听音频中断结束，在收到 onAudioInterruptionBegin 事件之后，小游戏内所有音频会暂停，收到此事件之后才可再次播放成功

_参数_

* function callback

取消监听事件的回调函数

```javascript
    onAudioInterruptionBegin(function callback)
```

监听音频因为受到系统占用而被中断开始，以下场景会触发此事件：闹钟、电话、FaceTime 通话。此事件触发后，小游戏内所有音频会暂停。

_参数_

* function callback

监听事件的回调函数

```javascript
    offAudioInterruptionBegin(function callback)
```

取消监听音频因为受到系统占用而被中断开始，以下场景会触发此事件：闹钟、电话、FaceTime 通话。此事件触发后，小游戏内所有音频会暂停。

_参数_

* function callback

取消监听事件的回调函数

```javascript
    onError(function callback)
```

监听全局错误事件

_参数_

* function callback

监听事件的回调函数

* callback 回调函数

_参数_

Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| message | string | 错误 |
| stack | string | 错误调用堆栈 |

```javascript
    offError(function callback)
```

取消监听全局错误事件

_参数_

* function callback

取消监听事件的回调函数

## 性能



```javascript
    getPerformance()
```

获取性能管理器

_返回值_

* Performance:一个性能管理器对象

```javascript
    Performance.now()
```

可以获取当前时间以毫秒为单位的时间戳

