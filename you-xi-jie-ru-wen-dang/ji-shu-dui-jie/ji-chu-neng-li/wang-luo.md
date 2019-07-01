# 网络

## 下载

```javascript
    downloadFile (Object object)
```

下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地文件路径。

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| url | string | 是 | 下载资源的 url |
| header | Object | 否 | HTTP 请求的 Header，Header 中不能设置 Referer |
| filePath | string | 是 | 指定文件下载后存储的路径 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

* success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| tempFilePath | string | 临时文件路径 |
| statusCode | number | 服务器返回的 HTTP 状态码 |

```javascript
    DownloadTask
```

一个可以监听下载进度变化事件，以及取消下载任务的对象

_方法_

* DownloadTask.abort\(\)

中断下载任务

* DownloadTask.onProgressUpdate\(function callback\)

监听下载进度变化事件

## 上传

**支持版本: \(core 版本 &gt;= 1.2.0\)**

```javascript
    uploadFile (Object object)
```

将本地资源上传到服务器。客户端发起一个 HTTP（S） POST 请求

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| url | string | 是 | 开发者服务器地址 |
| filePath | string | 是 | 要上传文件资源的路径 |
| name | string | 是 | 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 |
| header | Object | 否 | HTTP 请求的 Header，Header 中不能设置 Referer |
| formData | Object | 否 | HTTP 请求中其他额外的 form data |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

* success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| data | string | 开发者服务器返回的数据 |
| statusCode | number | 服务器返回的 HTTP 状态码 |

**支持版本: \(core 版本 &gt;= 1.2.0\)**

```javascript
    UploadTask
```

一个可以监听上传进度变化事件，以及取消上传任务的对象

_方法_

* UploadTask.abort\(\)

中断上传任务

* UploadTask.onProgressUpdate\(function callback\)

监听上传进度变化事件

