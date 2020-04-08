# 媒体

## 音频

```javascript
    AudioEngine
```

是单例对象，是属于 runtime 对象的子对象。主要用来播放音频，播放的时候会返回一个 audioID，之后都可以通过这个 audioID 来操作这个音频对象。

_方法_

```javascript
    number AudioEngine.play(string filePath, boolean loop, number volume)
```

播放音频

_参数_

* string filePath

音频文件路径

* boolean loop \[可选\]

是否循环播放，默认 false

* number volume \[可选\]

声音大小，默认1

_返回值_

* number

播放音频的ID

```javascript
    setLoop(number audioID, boolean loop)
```

设置音频是否循环。

_参数_

* number audioID

播放的音频ID

* boolean loop

是否循环

```javascript
    boolean isLoop(number audioID)
```

获取音频的循环状态。

_参数_

* number audioID

播放的音频ID

_返回值_

* boolean

  当前音频是否循环播放

```javascript
    AudioEngine.setVolume(number audioID, number volume)
```

设置音量

_参数_

* number audioID

播放的音频ID

* number volume

音量大小 0.0~1.0

```javascript
    number AudioEngine.getVolume(number audioID)
```

获取音量

_参数_

* number audioID

播放的音频ID

_返回值_

* number

音频的音量 0.0~1.0

```javascript
    boolean AudioEngine.setCurrentTime(number audioID, number sec)
```

设置当前的音频时间。

_参数_

* number audioID

播放的音频ID

* number sec

要设置的当前播放时间

_返回值_

* boolean

设置是否成功

```javascript
    number AudioEngine.getCurrentTime(number audioID)
```

获取当前的音频播放时间。

_参数_

* number audioID

播放的音频ID

_返回值_

* number

音频的当前播放时间

```javascript
    number AudioEngine.getDuration(number audioID)
```

获取音频总时长。

_参数_

* number audioID

播放的音频ID

_返回值_

* number

音频的总播放时间

```javascript
    audioEngine.AudioState AudioEngine.getState(number audioID)
```

获取音频状态。

_返回值_

* audioEngine.AudioState

详见[AudioState](http://docs.cocos.com/creator/api/zh/enums/audioEngine.AudioState.html)

```javascript
    AudioEngine.setFinishCallback(number audioID, Function callback)
```

设置一个音频结束后的回调

_参数_

* number audioID

播放的音频ID

* Function callback

播放结束后的回调函数

```javascript
    AudioEngine.pause(number audioID)
```

暂停正在播放音频。

_参数_

* number audioID

播放的音频ID

```javascript
    AudioEngine.pauseAll()
```

暂停现在正在播放的所有音频。

```javascript
    AudioEngine.resume(number audioID)
```

恢复播放指定的音频。

_参数_

* number audioID

播放的音频ID

```javascript
    AudioEngine.resumeAll()
```

恢复播放所有之前暂停的所有音频。

```javascript
    AudioEngine.stop(number audioID)
```

停止播放指定音频。

_参数_

* number audioID

播放的音频ID

```javascript
    AudioEngine.stopAll()
```

停止正在播放的所有音频。

```javascript
    AudioEngine.setMaxAudioInstance(number num)
```

设置一个音频可以设置几个实例

_参数_

* number num

一个音频可创建的实例个数

```javascript
    number AudioEngine.getMaxAudioInstance()
```

获取一个音频可以设置几个实例

```javascript
    AudioEngine.uncache(string filePath)
```

卸载预加载的音频。

_参数_

* string filePath

预加载的音频路径

```javascript
    AudioEngine.uncacheAll()
```

卸载所有音频。

```javascript
    AudioEngine.preload(string filePath, Function callback)
```

预加载一个音频

_参数_

* string filePath

音频文件路径

* Function callback

音频加载完成后的回调函数。该回调函数带有两个参数，第一个参数为isSucceed代表是否加载预加载成功，第二个参数为duration代表所加载音频的长度，只有isSucceed为true的时候duration才有效，否则duration的值为-1。

```javascript
    AudioEngine.setWaitingCallback(number audioID, Function callback)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

监听音频加载中事件。当音频因为数据不足时，会调用对应的 callback。

_参数_

* number audioID

播放的音频ID

* Function callback

音频加载中事件的回调函数

```javascript
    AudioEngine.setErrorCallback(number audioID, Function callback)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

监听音频播放错误事件

_参数_

* number audioID

播放的音频ID

* Function callback

音频播放错误事件的回调函数

```javascript
    AudioEngine.setCanPlayCallback(number audioID, Function callback)
```

**支持版本: \(core 版本 &gt;= 1.2.2\)**

监听音频即将播放事件。调用AudioEngine.play方法后，音频可能因为缓存等原因还没有开始播放，此时音频信息无法获取正确值，如音频的duration。通过此接口设置回调函数后，当收到回调时，此时音频数据已经准备好，可以正确获取音频信息。

_参数_

* number audioID

播放的音频ID

* Function callback

音频加载中事件的回调函数

## 图片

```javascript
    chooseImage(Object object)
```

从本地相册选择图片或使用相机拍照。

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 | 支持版本 |
| :--- | :--- | :--- | :--- | :--- |
| count | number | 是 | 需要选择的数量 |  |
| sourceType | Array. | 否 | 选择图片的来源&lt;/br&gt;默认值为：\['album', 'camera'\] | core 版本 &gt;= 1.0.2 |
| success | function | 否 | 接口调用成功的回调函数 |  |
| fail | function | 否 | 接口调用失败的回调函数 |  |
| complete | function | 否 | 接口调用结束的回调函数 |  |

* success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| tempFilePaths | Array\[string\] | 图片的本地文件路径列表 |
| tempFiles | Array\[ImageFile\] | 图片的本地文件列表，每一项是一个 File 对象 |

```javascript
    previewImage(Object object)
```

预览图片

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| current | string | 否 | 当前显示图片的链接，默认 urls 的第一张 |
| urls | Array\[string\] | 是 | 需要预览的图片链接列表 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    saveImageToPhotosAlbum(Object object)
```

保存图片到系统相册。需要用户授权 scope.writePhotosAlbum

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| filePath | string | 是 | 图片文件路径 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    ImageFile
```

_属性_

* string path

本地文件路径

* number size

本地文件大小，单位 B

```javascript
    saveImageTemp(Object object)
```

异步将二进制图像数据保存为本地临时图片文件。

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 | 支持版本 |
| :--- | :--- | :--- | :--- | :--- |
| data | Uint8Array | 是 | 像素数据，数据类型为 RGBA8888 格式的 Uint8Array 数组 |  |
| width | number | 是 | 写入图片的宽度，最大宽度为 4096 |  |
| height | number | 是 | 写入图片的高度，最大高度为 4096 |  |
| fileType | string | 是 | 写入图片的格式，支持的类形为 jpg、png |  |
| reverse | boolean | 否 | 是否需要将写入的数据按 y 轴反转，默认为 false | core 版本 &gt;= 1.0.1 |
| success | function | 否 | 接口调用成功的回调函数 |  |
| fail | function | 否 | 接口调用失败的回调函数 |  |
| complete | function | 否 | 接口调用结束的回调函数 |  |

* success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| tempFilePath | string | 保存完成后，本地临时文件路径 |
| errMsg | string | 错误信息 |

```javascript
    string saveImageTempSync(Object object)
```

同步将二进制图像数据保存为本地临时图片文件。

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 | 支持版本 |
| :--- | :--- | :--- | :--- | :--- |
| data | Uint8Array | 是 | 像素数据，数据类型为 RGBA8888 格式的 Uint8Array 数组 |  |
| width | number | 是 | 写入图片的宽度，最大宽度为 4096 |  |
| height | number | 是 | 写入图片的高度，最大高度为 4096 |  |
| fileType | string | 是 | 写入图片的格式，支持的类行为 jpg、png |  |
| reverse | boolean | 否 | 是否需要将写入的数据按 y 轴反转，默认为 false | core 版本 &gt;= 1.0.1 |

_返回值_

* string

保存完成后，本地临时文件路径

