# 平台客户端返回游戏通知

### 1、设置横幅广告加载监听

函数：

`AdSDK. setOnLoadBannerAdCB ( func )`

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | 广告创建成功回调函数 | function | 非空 | ad\_banner\_create函数回调 |

```text
onLoadBanner函数说明：
function onLoadBanner ( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 广告加载成功 | String | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
adId,  // string 加载banner成功的广告Id
}
```

### 2、设置横幅广告加载失败监听

函数：

`AdSDK. setOnErrorBannerAdCB ( func )`

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | 广告创建失败回调函数 | function | 非空 | ad\_banner\_create函数回调 |

```text
onErrorBanner函数说明：
function onErrorBanner ( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 广告加载失败 | String | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    adId,  // string 加载banner失败的广告Id
}
```

### 3、设置横幅广告展示监听

函数：

`AdSDK. setOnShowBannerAdCB ( func )`

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | 广告展示回调函数 | function | 非空 | ad\_banner\_show函数回调 |

```text
onShowBanner函数说明：
function onShowBanner ( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 广告展示成功 | String | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    adId,  // string 展示banner成功的广告Id
}
```

### 4、设置横幅广告隐藏监听

函数：

`AdSDK. setOnHideBannerAdCB ( func )`

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | 广告隐藏回调函数 | function | 非空 | ad\_banner\_hide函数回调 |

```text
onHideBanner函数说明：
function onHideBanner ( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 广告隐藏成功 | String | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    adId,  // string 隐藏banner成功的广告Id
}
```

### 5、设置插屏广告加载监听

```text
函数：
AdSDK. setOnLoadInterstitialAdCB ( func )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | 广告创建成功回调函数 | function | 非空 | ad\_interstitial\_create函数回调 |

```text
onLoadInterstitial函数说明：
function onLoadInterstitial ( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 广告加载成功a | String | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    adId,  // string 加载插屏成功的广告Id
}
```

### 6、设置插屏广告加载失败监听

```text
函数：
AdSDK. setOnErrorInterstitialAdCB ( func )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | 广告创建失败回调函数 | function | 非空 | ad\_interstitial\_create函数回调 |

```text
onErrorInterstitial函数说明：
function onErrorInterstitial ( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 广告加载失败 | String | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    adId,  // string 加载插屏失败的广告Id
}
```

### 7、设置插屏广告展示监听

```text
函数：
AdSDK. setOnShowInterstitialAdCB ( func )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | 广告展示回调函数 | function | 非空 | ad\_interstitial\_show函数回调 |

```text
onShowInterstitial函数说明：
function onShowInterstitial ( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 广告展示成功 | String | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    adId,  // string 展示插屏成功的广告Id
}
```

### 8、设置插屏广告隐藏监听

```text
函数：
AdSDK. setOnHideInterstitialAdCB ( func )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | 广告隐藏回调函数 | function | 非空 | ad\_interstitial\_hide函数回调 |

```text
onHideInterstitial函数说明：
function onHideInterstitial ( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 广告隐藏成功 | String | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    adId,  // string 隐藏插屏成功的广告Id
}
```

### 9、设置视频广告加载监听

```text
函数：
AdSDK. setOnLoadRewardedVideoAdCB ( func )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | 广告创建成功回调函数 | function | 非空 | ad\_rewardedVideo\_create函数回调 |

```text
onLoadRewardedVideo函数说明：
function onLoadRewardedVideo ( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 广告加载成功a | String | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    adId,  // string 加载视频成功的广告Id
}
```

### 10、设置视频广告加载失败监听

```text
函数：
AdSDK. setOnErrorRewardedVideoAdCB ( func )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | 广告创建失败回调函数 | function | 非空 | ad\_rewardedVideo\_create函数回调 |

```text
onErrorRewardedVideo函数说明：
function onErrorRewardedVideo ( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 广告加载失败 | String | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    adId,  // string 加载视频失败的广告Id
}
```

### 11、设置视频广告展示监听

```text
函数：
AdSDK. setOnShowRewardedVideoAdCB ( func )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | 广告展示回调函数 | function | 非空 | ad\_rewardedVideo\_show函数回调 |

```text
onShowRewardedVideo函数说明：
function onShowRewardedVideo ( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 广告展示成功 | String | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    adId,  // string 展示视频成功的广告Id
}
```

### 12、设置视频广告隐藏监听

```text
函数：
AdSDK. setOnHideRewardedVideoAdCB ( func )
```

参数说明：

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| func | 广告隐藏回调函数 | function | 非空 | ad\_rewardedVideo\_onClose函数回调 |

```text
onHideRewardedVideo函数说明：
function onHideRewardedVideo ( param )
```

| **参数** | **含义** | **类型** | **是否为空** | **备注** |
| :--- | :--- | :--- | :--- | :--- |
| param | 广告隐藏成功 | String | 非空 | Json对象，见下文 |

```text
Param Json对象:
{
    adId,  // string 隐藏视频成功的广告Id
}
```

