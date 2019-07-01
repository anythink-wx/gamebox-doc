---
description: 该目录下回调函数需要在GameSDK.init()函数调用前调用。
---

# 注册回调

## 设置初始化结果回调

设置游戏初始化回调函数，函数调用位置应在GameSDK.init\(\)函数前调用,否则初始化函数回调接收不到。

函数：

`GameSDK.setOnInitCB( func )`

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onInit回调函数 | function | 非空 | 详见onInit函数说明 |

onInit函数说明：

`function onInit( param )`

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

## 设置游戏音量变化消息回调

平台通知游戏声音变化，例：平台进入后台调用onAudio通知游戏关闭声音，当平台进入前台调用onAudio通知游戏开启声音。

函数：

```text
GameSDK.setOnAudioCB( func )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onAudio回调函数 | function | 非空 | 详见onAudio函数说明 |

onAudio函数说明：

`function onAudio( param )`

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 结束通知参数 | object | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    enable,  // int 是否开启 0、关，1、开
    volume   // int 音量 1 - 100
}
```

## 设置游戏暂停回调

平台通知游戏平台生命周期，例：平台进入后台调用onPause通知游戏平台进入后台，当平台进入前台调用onResume通知游戏平台进入前台。

函数：

`GameSDK.setOnPauseCB( func )`

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onPause回调函数 | function | 非空 | 详见onPause函数说明 |

onPause函数说明：

`function onPause()`

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| 无 |  |  |  |  |

## 设置游戏继续回调

平台通知游戏平台生命周期，例：平台进入后台调用onPause通知游戏平台进入后台，当平台进入前台调用onResume通知游戏平台进入前台。

函数：

`GameSDK.setOnResumeCB( func )`

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onResume回调函数 | function | 非空 | 详见onResume函数说明 |

onResume函数说明：

`function onResume()`

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| 无 |  |  |  |  |

## 设置支付返回回调

函数：

`GameSDK.setOnPayCB( func )`

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | onPay回调函数 | function | 非空 | 详见onPay函数说明 |

onPay函数说明：

`function onPay( param )`

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



