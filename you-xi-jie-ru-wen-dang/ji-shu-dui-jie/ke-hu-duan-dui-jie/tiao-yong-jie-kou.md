# 调用接口

## 初始化

调用平台任何其他的函数前，都要先调用该函数请求初始化SDK。初始化结果将会通过onInit回调函数返回给游戏。

_**注意：调用初始化函数之前，请先注册相关回调函数，如`setOnInitCB（）、setOnPayCB()`等**_

```text
函数：
GameSDK.init( gameId )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| gameId | 游戏Id | int | 非空 | 后台游戏资料中获得 |

## 设置初始化结果回调

## 设置初始化结果回调

设置游戏初始化回调函数，函数调用位置应在GameSDK.init\(\)函数前调用,否则初始化函数回调接收不到，通过该接口游戏可获取平台的用户信息。

设置游戏初始化回调函数，函数调用位置应在GameSDK.init\(\)函数前调用,否则初始化函数回调接收不到，通过该接口游戏可获取平台的用户信息。

函数：

```text
GameSDK.setOnInitCB( func )
```

参数说明：

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onInit回调函数 | function | 非空 | 详见onInit函数说明 |

onInit函数说明：

```text
function onInit( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | init返回 | object | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
error,  // int 错误代码：0、成功（见文末）
userId,  // int当前玩家id
nickName,  // string当前玩家名称
headUrl,  // string 当前玩家头像地址
location,  //string当前玩家地址
sex,  // string 玩家性别："f" - 女；"m" - 男；"x" – 未知
age // int 当前玩家年龄
}
```

## 游戏退出

调用该函数后平台会立即结束游戏并关闭游戏窗口。

```text
函数：
GameSDK.quit( reason )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :---: | :--- | :--- | :--- | :--- |
| reason | 退出原因 | int | 非空 | 1、正常退出；2、异常退出 |

## 设置屏幕朝向

调用该函数可以设置游戏时的屏幕显示朝向。

```text
函数：
GameSDK.setOrientation( orientation )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| orientation | 朝向 | int | 非空 | 0、 横屏； 1、竖屏 |

## 设置声音

调用该函数可以设置游戏时声音是否开启以及音量大小。

```text
函数：
GameSDK.setAudio( enable, volume )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| enable | 是否开启 | int | 非空 | 0、关闭；1、开启 |
| volume | 声量 | int | 非空 | 1~100 |

## 设置游戏音量变化消息回调

## 设置游戏音量变化消息回调

平台通知游戏声音变化，例：平台进入后台调用onAudio通知游戏关闭声音，当平台进入前台调用onAudio通知游戏开启声音。函数调用位置应在GameSDK.init\(\)函数前调用。

平台通知游戏声音变化，例：平台进入后台调用onAudio通知游戏关闭声音，当平台进入前台调用onAudio通知游戏开启声音。函数调用位置应在GameSDK.init\(\)函数前调用。

函数：

函数：

```text
GameSDK.setOnAudioCB( func )
```

```text
GameSDK.setOnAudioCB( func )
```

参数说明：

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onAudio回调函数 | function | 非空 | 详见onAudio函数说明 |

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onAudio回调函数 | function | 非空 | 详见onAudio函数说明 |

onAudio函数说明：

onAudio函数说明：

```text
function onAudio( param )
```

```text
function onAudio( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 结束通知参数 | object | 非空 | Json对象，见下文 |

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 声音通知参数 | object | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    enable,  // int 是否开启 0、关，1、开
    volume   // int 音量 1 - 100
}
```

```text
Param Json对象:
{
    enable,  // int 是否开启 0、关，1、开
    volume   // int 音量 1 - 100
}
```

## 设置游戏加载进度（SDK版本&gt;=2）

SDK版本2开始，平台增加了统一的游戏加载进度界面，用于游戏后台加载时显示。

游戏需要在初始化后，通过此函数报告游戏加载进度。加载界面将显示“加载中...”

当进度&gt;=100%时，如果是对战类游戏，加载界面将提醒用户“等待对手进入中...”，并且游戏需要在对手都进入房间后，调用hideLoadProgress函数关闭加载界面。

当进度&gt;=100%时，如果是非对战类游戏，加载界面将提醒用户“加载完成”，游戏需调用hideLoadProgress函数关闭加载界面。

```text
函数：
GameSDK. setLoadProgress (progress)
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| progress | 加载进度 | int | 非空 | 1-100 |

## 隐藏游戏加载进度

用于关闭加载进度界面。此后玩家才可以和游戏交互。

```text
函数：
GameSDK. hideLoadProgress ()
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| 无 |  |  |  |  |

## 支付

```text
函数：
GameSDK.pay(orderId, goodsName, goodsDesc, orderAmount, extension, notifyURL)
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| orderId | 订单号 | string | 非空 |  |
| goodsName | 商品名称 | string | 非空 |  |
| goodsDesc | 商品描述 | string | 非空 |  |
| orderAmount | 商品价格 | int | 非空 | 以“分”为单位 |
| extension | 透传数据 | string | 非空 | 透传发送到游戏服务器 |
| notifyURL | 支付付款通知地址 | string | 非空 | 支付成功通知游戏服务器 |

## 设置支付返回回调

## 设置支付返回回调

平台将支付成功与否通知给游戏，函数调用位置应在GameSDK.init\(\)函数前调用。

平台将支付成功与否通知给游戏，函数调用位置应在GameSDK.init\(\)函数前调用。

函数：

函数：

```text
GameSDK.setOnPayCB( func )
```

```text
GameSDK.setOnPayCB( func )
```

参数说明：

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onPay回调函数 | function | 非空 | 详见onPay函数说明 |

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onPay回调函数 | function | 非空 | 详见onPay函数说明 |

onPay函数说明：

onPay函数说明：

```text
function onPay( param )
```

```text
function onPay( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 结束通知参数 | object | 非空 | Json对象，见下文 |

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 结束通知参数 | object | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    result,  // int 支付结果 0、成功，非0、错误号
    message   // string 描述
}
```

```text
Param Json对象:
{
    result,  // int 支付结果 0、成功，非0、错误号
    message   // string 描述
}
```

