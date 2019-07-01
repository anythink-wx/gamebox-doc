# H5游戏打包



H5游戏客户端需要打包并且签名才能在平台审核及运行。

下面为客户端打包签名流程：

1.  将客户端压缩成zip文件，index.html需要在压缩包的根目录
2. 使用jarsigner工具进行签名（见下文）， 将签名后的包重命名为以.cpk为后缀的文件名。

#### 签名方法：

1.  生成keystore文件，如已有，则跳过该步骤。例如:生成名为test.keystore，alias为test的keystore文件：keytool -genkey -keystore test.keystore -alias test -keyalg RSA -keysize 2048 -sigalg MD5withRSA -validity 99999
2.  使用jarsigner工具签名。例如：使用名为test.keystore，alias为test的keystore文件对Demo.zip进行签名，签名文件保存为Signed.cpk：

   jarsigner -verbose -keystore test.keystore -signedjar Signed.cpk Demo.zip -digestalg SHA1 -sigalg MD5withRSA test

