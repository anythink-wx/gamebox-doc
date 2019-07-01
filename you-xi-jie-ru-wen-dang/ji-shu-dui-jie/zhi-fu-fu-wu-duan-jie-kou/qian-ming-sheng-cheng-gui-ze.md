# 签名生成规则

## 1、构造原串

将**非空参数**按照字典序排序,使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串,在末尾加上& to\_lower\_case\(md5\(gameSecret\)\)。

注意:参数名区分大小写

## 2、生成sign值

使用 md5 算法对构造的源串进行加密得到sign值。

## 3、样例

```text
sign=md5(cpOrderId=AIAI2019032716570620038500993X&errorCode=0&errorMsg=ok&extension=AIAI2019032716570620038500993X&gameId=632344988&orderAmount=10&orderId=632344988_AIAI2019032716570620038500993X&payTime=20190327170136&tradeResult=1&userId=5059002&to_lower_case(md5(gameSecret)))
```

