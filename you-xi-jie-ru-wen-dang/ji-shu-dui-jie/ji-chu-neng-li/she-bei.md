# 设备

## 加速计

```javascript
    onAccelerometerChange(function callback)
```

监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 stopAccelerometer 停止监听。

_参数_

* function callback: 监听加速度数据的回调函数

_callback 回调函数参数_

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| x | number | x轴 |
| y | number | y轴 |
| z | number | z轴 |

```javascript
    startAccelerometer(Object object)
```

开始监听加速度数据。

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |  |
| :--- | :--- | :--- | :--- | :--- |
| interval | string | 否 | 监听加速度数据回调函数的执行频率 |  |
| success | function |  | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |  |
| complete | function | 否 | 接口调用结束的回调函数 |  |

* interval 的合法值

| 值 | 说明 |  |
| :--- | :--- | :--- |
| game | 适用于更新游戏的回调频率，在 20ms/次 左右 |  |
| ui | 适用于更新 UI 的回调频率，在 60ms/次 左右 |  |
| normal | 普通的回调频率，在 200ms/次 左右 | 默认值 |

```javascript
    stopAccelerometer(Object object)
```

停止监听加速度数据。

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行 |

## 电量

```javascript
    getBatteryInfo(Object object)
```

获取设备电量

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

success 回调函数

_参数_

* BatteryInfo res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| level | number | 设备电量，范围 1 - 100 |
| isCharging | number | 是否正在充电中（**支持版本: \(core 版本 &gt;= 1.1.0\)**） |

```javascript
   getBatteryInfoSync()
```

**支持版本: \(core 版本 &gt;= 1.1.0\)** `getBatteryInfo()`的同步版本，获取设备电量。

#### 剪贴板

```javascript
    getClipboardData(Object object)
```

获取系统剪贴板的内容

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

success 回调函数

_参数_

* Object object

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| data | string | 剪贴板的内容 |

```javascript
    setClipboardData(Object object)
```

设置系统剪贴板的内容

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| data | string | 是 | 剪贴板的内容 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

## 罗盘

```javascript
    onCompassChange(function callback)
```

监听罗盘数据，频率：5 次/秒，接口调用后会自动开始监听，可使用 stopCompass 停止监听。

_参数_

* function callback

监听罗盘数据的回调函数

* callback 回调函数

_参数_

* Object object

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| direction | number | 面对的方向度数 |

```javascript
    startCompass(Object object)
```

开始监听罗盘数据

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    stopCompass(Object object)
```

停止监听罗盘数据

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

## 网络

```javascript
    getNetworkType(Object object)
```

获取网络类型

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    onNetworkStatusChange(function callback)
```

监听网络状态变化事件

_参数_

* function callback

监听事件的回调函数

* callback 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| isConnected | boolean | 当前是否有网络链接 |
| networkType | string | 网络类型 |

* networkType 的合法值

| 值 | 说明 |  |
| :--- | :--- | :--- |
| wifi | wifi | 网络 |
| 2g | 2g | 网络 |
| 3g | 3g | 网络 |
| 4g | 4g | 网络 |
| unknown | Android 下不常见的网络类型 |  |
| none | 无网络 |  |

```javascript
    offNetworkStatusChange(function callback)
```

取消监听键盘输入事件

_参数_

* function callback

取消监听事件的回调函数

## 屏幕

```javascript
    getScreenBrightness(Object object)
```

获取屏幕亮度

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    setKeepScreenOn(Object object)
```

设置是否保持常亮状态

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| keepScreenOn | boolean | 是 | keepScreenOn |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    setScreenBrightness(Object object)
```

设置屏幕亮度

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| value | number | 是 | 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

## 振动

```javascript
    vibrateShort(Object object)
```

使手机发生较短时间的振动（40 ms）

在 iOS 平台上，iPhone 7 / 7 Plus 以下设备不生效

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    vibrateLong(Object object)
```

使手机发生较长时间的振动（400 ms\)

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

