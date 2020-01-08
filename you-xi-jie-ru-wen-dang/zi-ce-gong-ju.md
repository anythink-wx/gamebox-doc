# 自测工具

## [1.0.9 - 2020-01-08](http://chukong.oss-cn-qingdao.aliyuncs.com/uploads/202001/apk/a43c8a1a694ff0b6f168d984979ae066.apk)

修复h5游戏、runtime游戏广告创建异常

## [1.0.8 - 2019-10-25](https://chukong.oss-cn-qingdao.aliyuncs.com/res/Cocos_Game_Tools_build191025.apk)

### Fixed

* 修复支付宝支付拉起异常

### 使用方法：

1、开发者将APK文件下载下来安装到手机。

2、打开APP点击左上角配置游戏按钮，进入游戏配置页面，参考以下配置游戏：

配置文件格式：

```text
{
   gameId: 100001,  
   gameType: 对战类游戏/非对战类游戏,
   gameMode: h5/runtime/h5外链,
   loadType: file/url, 
   path: /jeekegame/game.cpk 
}
```

配置文件说明：

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>&#x53C2;&#x6570;</b>
      </th>
      <th style="text-align:left"><b>&#x542B;&#x4E49;</b>
      </th>
      <th style="text-align:center"><b>&#x7C7B;&#x578B;</b>
      </th>
      <th style="text-align:left"><b>&#x5907;&#x6CE8;</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">gameId</td>
      <td style="text-align:left">&#x6E38;&#x620F;ID</td>
      <td style="text-align:center">&#x6574;&#x6570;</td>
      <td style="text-align:left">&#x901A;&#x8FC7;CP&#x540E;&#x53F0;&#x83B7;&#x53D6;</td>
    </tr>
    <tr>
      <td style="text-align:left">loadType</td>
      <td style="text-align:left">&#x6E38;&#x620F;&#x52A0;&#x8F7D;&#x7C7B;&#x578B;</td>
      <td style="text-align:center">&#x5B57;&#x7B26;&#x4E32;</td>
      <td style="text-align:left">&#x201D;file&#x201D; &#x6216; &#x201D;url&#x201D;</td>
    </tr>
    <tr>
      <td style="text-align:left">gameMode</td>
      <td style="text-align:left">&#x6E38;&#x620F;&#x52A0;&#x8F7D;&#x5F62;&#x5F0F;</td>
      <td style="text-align:center">&#x5B57;&#x7B26;&#x4E32;</td>
      <td style="text-align:left">runtime&#x3001;H5&#x6E38;&#x620F;&#x94FE;&#x63A5;&#x3001;H5&#x6E38;&#x620F;</td>
    </tr>
    <tr>
      <td style="text-align:left">gameType</td>
      <td style="text-align:left">&#x6E38;&#x620F;&#x7C7B;&#x578B;</td>
      <td style="text-align:center">&#x5B57;&#x7B26;&#x4E32;</td>
      <td style="text-align:left">&#x5BF9;&#x6218;&#x548C;&#x975E;&#x5BF9;&#x6218;&#x6E38;&#x620F;</td>
    </tr>
    <tr>
      <td style="text-align:left">loadLocation</td>
      <td style="text-align:left">&#x6E38;&#x620F;&#x52A0;&#x8F7D;&#x5730;&#x5740;</td>
      <td style="text-align:center">&#x5B57;&#x7B26;&#x4E32;</td>
      <td style="text-align:left">
        <p>&#x6839;&#x636E;&#x52A0;&#x8F7D;&#x7C7B;&#x578B;,</p>
        <p>1&#x3001;&#x4EE5;&#x6587;&#x4EF6;&#x65B9;&#x5F0F;&#x4ECE;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x52A0;&#x8F7D;&#x6E38;&#x620F;&#x5305;</p>
        <p>&#xFF08;&#x52A0;&#x8F7D;&#x7C7B;&#x578B;&#x4E3A;&#xFF1A;&#x201D;file&#x201D;&#xFF09;</p>
        <p>2&#x3001;&#x4EE5;&#x7F51;&#x9875;&#x65B9;&#x5F0F;&#x4ECE;&#x6307;&#x5B9A;&#x7F51;&#x5740;</p>
        <p>&#x6253;&#x5F00;&#x6E38;&#x620F;&#xFF08;&#x52A0;&#x8F7D;&#x7C7B;&#x578B;&#x4E3A;&#xFF1A;&#x201D;url&#x201D;&#xFF09;
          <br
          />url&#x4F8B;&#xFF1A;<a href="http://chukong">http://chukong...cpk?</a>index.html</p>
        <p>File&#x4F8B;&#xFF1A;/cocosgame/game.cpk</p>
      </td>
    </tr>
  </tbody>
</table>3、配置完成后点击保存，然后启动游戏，测试工具会根据配置的参数拉起游戏。

### 







