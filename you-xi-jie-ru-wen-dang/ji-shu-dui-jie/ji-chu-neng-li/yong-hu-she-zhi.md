# 用户设置

```javascript
    getUserInfo(Object object)
```

获取用户信息 _参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

* success 回调函数
* Object res

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| userInfo | UserInfo | 用户信息对象 |

* UserInfo

_属性_

* string userID 用户ID
* string nickName 用户昵称
* string avatarUrl

  用户头像图片 url。

* string city 用户所在城市
* string country 用户所在国家
* number gender 用户性别 **gender 的合法值**

  | 值 | 说明 |
  | :--- | :--- |
  | 0 | 未知 |
  | 1 | 男性 |
  | 2 | 女性 |

* string province 用户所在省份 _参数_
* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| userInfo | UserInfo | 用户信息对象 |

```javascript
    authorize(Object object)
```

向用户发起授权请求 _参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| scope | string | 是 | 需要获取权限的 scope |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    getSetting(Object object)
```

获取用户的当前设置。返回值中只会出现已经请求过的权限。

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

* success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| authSetting | AuthSetting | 用户授权结果 |

```javascript
    openSetting(Object object)
```

调起客户端小游戏设置界面，返回用户设置的操作结果。设置界面只会出现已经请求过的权限。

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

* success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| authSetting | AuthSetting | 用户授权结果 |

* AuthSetting

_属性_

* boolean scope.userInfo

用户信息，对应接口 getUserInfo

* boolean scope.location

地理位置，对应接口 getLocation

* boolean scope.writePhotosAlbum

保存到相册，对应接口 saveImageToPhotosAlbum

* boolean scope.camera

使用摄像头拍照，对应接口 chooseImage

