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

## 录音机

**支持版本: \(core 版本 &gt;= 1.2.0\)**

```javascript
    getRecorderManager()
```

获取全局唯一的录音管理器 RecorderManager

```javascript
    RecorderManager.start(Object object)
```

开始录音

_参数_

| 属性 | 类型 | 默认值 | 是否必填 | 说明 | 支持版本 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| duration | number | 60000 | 否 | 录音的时长，单位 ms，最大值 600000（10 分钟） |  |
| sampleRate | number | 8000 | 否 | 采样率 |  |
| numberOfChannels | number | 2 | 否 | 录音通道数 |  |
| encodeBitRate | number | 48000 | 否 | 编码码率，有效值见下表格 |  |
| format | string | aac | 否 | 音频格式 |  |
| frameSize | number |  | 否 | 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。 |  |
| audioSource | string | auto | 否 | 指定录音的音频输入源 |  |

* object.sampleRate 的合法值

  | 值 | 说明 |
  | :--- | :--- |
  | 8000 | 8000 采样率 |
  | 11025 | 11025 采样率 |
  | 12000 | 12000 采样率 |
  | 16000 | 16000 采样率 |
  | 22050 | 22050 采样率 |
  | 24000 | 24000 采样率 |
  | 32000 | 32000 采样率 |
  | 44100 | 44100 采样率 |
  | 48000 | 48000 采样率 |

* object.numberOfChannels 的合法值

  | 值 | 说明 |
  | :--- | :--- |
  | 1 | 1 个通道 |
  | 2 | 2 个通道 |

* object.format 的合法值

  | 值 | 说明 |
  | :--- | :--- |
  | mp3 | mp3 格式 |
  | aac | aac 格式 |

* object.audioSource 的合法值

  | 值 | 说明 |
  | :--- | :--- |
  | auto | 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风 |
  | mic | 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android |
  | camcorder | 同 mic，适用于录制音视频内容，仅限 Android |
  | voice\_communication | 同 mic，适用于实时沟通，仅限 Android |
  | voice\_recognition | 同 mic，适用于语音识别，仅限 Android |

* 采样率与编码码率限制

  每种采样率有对应的编码码率范围有效值，设置不合法的采样率或编码码率会导致录音失败，具体对应关系如下表。

  | 值 | 说明 |
  | :--- | :--- |
  | 8000 | 16000 ~ 48000 |
  | 11025 | 16000 ~ 48000 |
  | 12000 | 24000 ~ 64000 |
  | 16000 | 24000 ~ 96000 |
  | 22050 | 32000 ~ 128000 |
  | 24000 | 32000 ~ 128000 |
  | 32000 | 48000 ~ 192000 |
  | 44100 | 64000 ~ 320000 |
  | 48000 | 64000 ~ 320000 |

```javascript
    RecorderManager.pause()
```

暂停录音

```javascript
    RecorderManager.resume()
```

继续录音

```javascript
    RecorderManager.stop()
```

停止录音

```javascript
    RecorderManager.onStart(function callback)
```

监听录音开始事件

```javascript
    RecorderManager.onResume(function callback)
```

监听录音继续事件

```javascript
    RecorderManager.onPause(function callback)
```

监听录音暂停事件

```javascript
    RecorderManager.onStop(function callback)
```

监听录音结束事件

```javascript
    RecorderManager.onFrameRecorded(function callback)
```

监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。

```javascript
    RecorderManager.onError(function callback)
```

监听录音错误事件。

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

## 视频

```javascript
    Video createVideo(Object object)
```

_**支持版本: \(core 版本 &gt;= 1.1.0\)**_ 创建视频

_参数_

* Object object

| 属性 | 键值类型 | 默认值 | 是否必填 | 说明 | 支持版本 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| x | number | 0 | 否 | 视频的左上角横坐标 |  |
| y | number | 0 | 否 | 视频的左上角纵坐标 |  |
| width | number | 300 | 否 | 视频的宽度 |  |
| height | number | 150 | 否 | 视频的高度 |  |
| src | string |  | 是 | 视频的资源地址 |  |
| poster | string |  | 是 | 视频的封面 |  |
| initialTime | number | 0 | 否 | 视频的初始播放位置， 单位为 s 秒 |  |
| playbackRate | number | 1.0 | 否 | 视频的播放速率， 有效值有0.5、 0.8、1.0、1.25、1.5 |  |
| live | boolean | false | 否 | 视频是否为直播 |  |
| objectFit | string | 'contain' | 否 | 视频的缩放模式 |  |
| autoplay | boolean | false | 否 | 视频是否自动播放 |  |
| loop | boolean | false | 否 | 视频是否是否循环播放 |  |
| muted | boolean | false | 否 | 视频是否禁音播放 |  |
| poster | string |  | 是 | 视频的封面 |  |
| controls | boolean | true | 否 | 视频是否显示控件 |  |
| showCenterPlayBtn | boolean | false | 否 | 是否显示视频中央的播放按钮 |  |
| enableProgressGesture | boolean | false | 否 | 是否启用手势控制播放进度 |  |

* object.objectFit 的合法值

| 值 | 说明 |
| :--- | :--- |
| fill | 填充，视频拉伸填满整个容器，不保证保持原有长宽比例 |
| contain | 包含，保持原有长宽比例。保证视频尺寸一定可以在容器里面放得下。因此，可能会有部分空白 |
| cover | 覆盖，保持原有长宽比例。保证视频尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，视频有部分会看不见 |

_返回值_

-Video 一个视频对象，可以通过设置该对象上的属性和调用该对象上的方法来控制视频

```javascript
    Video.destroy()
```

销毁视频

```javascript
    Video.exitFullScreen()
```

视频退出全屏

```javascript
    Video.offEnded(function callback)
```

取消监听视频播放到末尾事件

_参数_

* function callback

  视频播放到末尾事件的回调函数

```javascript
    Video.offError(function callback)
```

取消监听视频错误事件

_参数_

* function callback

  视频错误事件的回调函数

```javascript
    Video.offPause(function callback)
```

取消监听视频暂停事件

_参数_

* function callback

  视频暂停事件的回调函数

```javascript
    Video.offPlay(function callback)
```

取消监听视频播放事件

_参数_

* function callback

  视频播放事件的回调函数

```javascript
    Video.offTimeUpdate(function callback)
```

取消监听视频播放进度更新事件

_参数_

* function callback

  视频播放进度更新事件的回调函数

```javascript
    Video.offWaiting(function callback)
```

取消监听视频缓冲事件

_参数_

* function callback

  视频缓冲事件的回调函数

```javascript
    Video.onEnded(function callback)
```

监听视频播放到末尾事件

_参数_

* function callback

  视频播放到末尾事件的回调函数

```javascript
    Video.onError(function callback)
```

监听视频错误事件

_参数_

* function callback 视频错误事件的回调函数
* Object res 错误回调函数被调用时传入的参数

| 属性 | 类型 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- |
| errMsg | string | 错误信息 |  |

```javascript
    Video.onPause(function callback)
```

监听视频暂停事件

_参数_

* function callback

  视频暂停事件的回调函数

```javascript
    Video.onPlay(function callback)
```

监听视频播放事件

_参数_

* function callback

  视频播放事件的回调函数

```javascript
    Video.onTimeUpdate(function callback)
```

监听视频播放进度更新事件

_参数_

* function callback 视频播放进度更新事件的回调函数
* Object res 回调函数被调用时传入的参数

| 属性 | 类型 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- |
| position | number | 当前的播放位置，单位为秒 |  |
| duration | number | 视频的总时长，单位为秒 |  |

```javascript
    Video.onWaiting(function callback)
```

监听视频缓冲事件

_参数_

* function callback

  视频缓冲事件的回调函数

```javascript
    Video.pause()
```

暂停视频

```javascript
    Video.play()
```

播放视频

```javascript
    Video.requestFullScreen()
```

视频全屏

```javascript
    Video.seek(number time)
```

视频跳转

_参数_

* number time

  视频跳转到指定位置，单位为 s 秒

```javascript
    Video.stop()
```

停止视频

