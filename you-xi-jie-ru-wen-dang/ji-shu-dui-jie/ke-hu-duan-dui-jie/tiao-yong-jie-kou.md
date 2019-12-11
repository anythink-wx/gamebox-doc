# 调用接口

## 设置初始化结果回调

设置游戏初始化回调函数，函数调用位置应在GameSDK.init\(\)函数前调用,否则初始化函数回调接收不到，通过该接口游戏可获取平台的用户信息。

```text
函数：
GameSDK.setOnInitCB(func);
```

方法说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onInit回调函数 | function | 非空 | 详见onInit函数说明 |

onInit函数说明：

当平台收到游戏调用 init 方法，平台会调用 onInit 方法将用户信息返回给游戏

```text
function onInit(param);
```

参数说明：

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

## 初始化

调用平台其他函数前\(设置回调监听需在init前调用\)，都要先调用该函数请求初始化SDK。初始化结果将会通过onInit回调函数返回给游戏。

_**注意：调用初始化函数之前，请先注册相关回调函数，如`setOnInitCB（）、setOnPayCB()`等**_

```text
函数：
GameSDK.init(gameId);
```

方法说明：游戏接入游戏sdk后，在游戏初始化完成后，调用该函数通知平台，平台收到init函数后，会调用onInit函数，将用户信息返回给游戏使用。（如游戏一直展示loding，原因是未正确接入GameSDK或未调用init函数）

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| gameId | 游戏Id | int | 非空 | 后台游戏资料中获得 |

## 游戏退出

调用该函数后平台会立即结束游戏并关闭游戏窗口。

```text
函数:
GameSDK.quit(reason);
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :---: | :--- | :--- | :--- | :--- |
| reason | 退出原因 | int | 非空 | 1、正常退出；2、异常退出 |

## 设置屏幕朝向

调用该函数可以设置游戏时的屏幕显示朝向。例如横屏游戏，需调用该函数通 知平台设置横屏。

```text
函数：
GameSDK.setOrientation(orientation);
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| orientation | 朝向 | int | 非空 | 0、 横屏； 1、竖屏 |

## 设置支付结果回调

平台将支付成功与否通知给游戏，函数调用位置应在GameSDK.init\(\)函数前调用。

```text
函数
GameSDK.setOnPayCB(func);
```

方法说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onPay回调函数 | function | 非空 | 详见onPay函数说明 |

onPay函数说明：平台会通过onPay函数通知游戏，游戏需设置好回调函数接收。

```text
函数
function onPay(param)
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 支付参数 | object | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    result,  // int 支付结果 0、成功，非0、错误号
    message   // string 描述
}
```

#### 如需同步支付订单信息，请查看支付服务端接口。

## 支付

游戏调用该函数，拉起平台支付功能

```text
函数：
GameSDK.pay(orderId,goodsName,goodsDesc,orderAmount,extension,notifyURL);
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

平台将支付成功与否通知给游戏，函数调用位置应在GameSDK.init\(\)函数之后调用。支付的结果将会通过onPay函数返回。游戏需在GameSDK.init\(\)函数之前，需将支付回调函数GameSDK.setOnPayCB设置好。

## 设置游戏暂停回调

游戏调用该函数设置游戏暂停回调，当平台进入后台，会调用 onPause 方法通知游戏

```text
函数:
GameSDK.setOnPauseCB( func )
```

#### 参数说明:

| 参数 | 含义 | 类型 | 是否为空 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| func | onPause回调函数 | function | 非空 | 详见onPause函数 |

**onPause 函数说明:** 

当平台进入后台时，调用 onPause 函数，通知游戏

```text
function onPause()
```

## 设置游戏继续回调

游戏调用该函数设置游戏继续回调，当平台从后台进入前台时，平台会调用 onResume 函数通知游戏

```text
函数:
GameSDK.setOnResumeCB( func )
```

**参数说明：**

| 参数 | 含义 | 类型 | 是否为空 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| func | onResume回调 | function | 非空 | 详见onResume函数 |

#### onResume函数说明

当平台从后台进入前台时，平台会调用 onResume 函数通知游戏

```text
function onResume()
```

## 设置音量变化回调

游戏调用该函数，设置游戏音量变化消息回调，当平台声音变化时会通知游戏 声音变化。例:平台进入后台调用 onAudio 通知游戏关闭声音，当平台进入前 台调用 onAudio 通知游戏开启声音。\(建议游戏默认关闭声音，等平台调用该函 数在设置声音的开关\)

```text
函数:
GameSDK.setOnAudioCB(func);
```

方法说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onAudio回调函数 | function | 非空 | 详见onAudio函数说明 |

onAudio函数说明：

平台通知游戏声音变化，例：平台进入后台调用onAudio通知游戏关闭声音，当平台进入前台调用onAudio通知游戏开启声音。函数调用位置应在GameSDK.init\(\)函数前调用。

```text
function onAudio(param);
```

参数说明:

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 声音参数 | object | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    enable,  // int 是否开启 0、关，1、开
    volume   // int 音量 1 - 100
}
```

