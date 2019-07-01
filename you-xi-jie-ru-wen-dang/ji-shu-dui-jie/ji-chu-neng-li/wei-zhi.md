# 位置

```javascript
    getLocation(Object object)
```

获取当前的地理位置、速度

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 | 支持版本 |
| :--- | :--- | :--- | :--- | :--- |
| type | string | 否 | 默认为wgs84坐标，支持gcj02和bd09坐标 | core 版本 &gt;= 1.1.0 |
| altitude | boolean | 否 | 默认false，传入 true 会返回高度信息 | core 版本 &gt;= 1.1.0 |
| success | function | 否 | 接口调用成功的回调函数 |  |
| fail | function | 否 | 接口调用失败的回调函数 |  |
| complete | function | 否 | 接口调用结束的回调函数 |  |

* success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| latitude | number | 纬度，范围为 -90~90，负数表示南纬 |
| longitude | number | 经度，范围为 -180~180，负数表示西经 |
| speed | number | 速度，单位 m/s |
| accuracy | number | 位置的精确度 |
| altitude | number | 高度，单位 m |
| verticalAccuracy | number | 垂直精度，单位 m（Android 无法获取，返回 0） |
| horizontalAccuracy | number | 水平精度，单位 m |

