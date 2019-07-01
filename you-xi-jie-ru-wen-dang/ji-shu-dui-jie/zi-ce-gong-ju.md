# 自测工具

为了方便游戏开发者测试游戏与平台的对接，平台提供游戏测试工具App（[点我下载](../zi-yuan-xia-zai/zi-ce-gong-ju.md)）。测试工具可以拉起游戏并提供游戏登录、支付、对战匹配功能。

#### 开发者必须使用自测工具测试接入没有问题后才可打包提交平台审核。

测试工具可以通过两个方式拉起游戏：

1. 通过URL拉起游戏
2. 通过本地游戏包拉起游戏

测试工具通过读取配置游戏参数，确定拉起的游戏类型，以及游戏拉起方式。

配置游戏参数流程：启动自测工具点击左上角配置游戏按钮，进入游戏配置页面。根据需求配置并保存。

配置文件格式：

```text
{
   gameId: 100001, 
   gameKey: Zd2cYz3S#2, 
   gameScrect: 3xdkakdsl2cskd, 
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
      <th style="text-align:left"><b>&#x7C7B;&#x578B;</b>
      </th>
      <th style="text-align:left"><b>&#x5907;&#x6CE8;</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">gameId</td>
      <td style="text-align:left">&#x6E38;&#x620F;ID</td>
      <td style="text-align:left">&#x6574;&#x6570;</td>
      <td style="text-align:left">&#x901A;&#x8FC7;CP&#x540E;&#x53F0;&#x83B7;&#x53D6;</td>
    </tr>
    <tr>
      <td style="text-align:left">gameKey</td>
      <td style="text-align:left">&#x6E38;&#x620F;Key</td>
      <td style="text-align:left">&#x5B57;&#x7B26;&#x4E32;</td>
      <td style="text-align:left">&#x901A;&#x8FC7;CP&#x540E;&#x53F0;&#x83B7;&#x53D6;</td>
    </tr>
    <tr>
      <td style="text-align:left">gameSecret</td>
      <td style="text-align:left">&#x6E38;&#x620F;Secret</td>
      <td style="text-align:left">&#x5B57;&#x7B26;&#x4E32;</td>
      <td style="text-align:left">&#x901A;&#x8FC7;CP&#x540E;&#x53F0;&#x83B7;&#x53D6;</td>
    </tr>
    <tr>
      <td style="text-align:left">loadType</td>
      <td style="text-align:left">&#x6E38;&#x620F;&#x52A0;&#x8F7D;&#x7C7B;&#x578B;</td>
      <td style="text-align:left">&#x5B57;&#x7B26;&#x4E32;</td>
      <td style="text-align:left">&#x201D;file&#x201D; &#x6216; &#x201D;url&#x201D;</td>
    </tr>
    <tr>
      <td style="text-align:left">gameMode</td>
      <td style="text-align:left">&#x6E38;&#x620F;&#x52A0;&#x8F7D;&#x5F62;&#x5F0F;</td>
      <td style="text-align:left">&#x5B57;&#x7B26;&#x4E32;</td>
      <td style="text-align:left">1&#x4EE3;&#x8868;runtime&#x6E38;&#x620F;&#xFF0C;2&#x4EE3;&#x8868;H5&#x6E38;&#x620F;</td>
    </tr>
    <tr>
      <td style="text-align:left">gameType</td>
      <td style="text-align:left">&#x6E38;&#x620F;&#x7C7B;&#x578B;</td>
      <td style="text-align:left">&#x5B57;&#x7B26;&#x4E32;</td>
      <td style="text-align:left">1&#x4EE3;&#x8868;cocos&#x5E73;&#x53F0;&#x5BF9;&#x6218;&#x6E38;&#x620F;&#xFF0C;&#x5176;&#x4ED6;&#x4EE3;&#x8868;&#x975E;&#x5BF9;&#x6218;&#x6E38;&#x620F;</td>
    </tr>
    <tr>
      <td style="text-align:left">loadLocation</td>
      <td style="text-align:left">&#x6E38;&#x620F;&#x52A0;&#x8F7D;&#x5730;&#x5740;</td>
      <td style="text-align:left">&#x5B57;&#x7B26;&#x4E32;</td>
      <td style="text-align:left">
        <p>&#x6839;&#x636E;&#x52A0;&#x8F7D;&#x7C7B;&#x578B;,1&#x3001;&#x4EE5;&#x6587;&#x4EF6;&#x65B9;&#x5F0F;&#x4ECE;&#x6307;&#x5B9A;&#x4F4D;&#x7F6E;&#x52A0;&#x8F7D;&#x6E38;&#x620F;&#x5305;&#xFF08;&#x52A0;&#x8F7D;&#x7C7B;&#x578B;&#x4E3A;&#xFF1A;&#x201D;file&#x201D;&#xFF09;&#xFF0C;2&#x3001;&#x4EE5;&#x7F51;&#x9875;&#x65B9;&#x5F0F;&#x4ECE;&#x6307;&#x5B9A;&#x7F51;&#x5740;&#x6253;&#x5F00;&#x6E38;&#x620F;&#xFF08;&#x52A0;&#x8F7D;&#x7C7B;&#x578B;&#x4E3A;&#xFF1A;&#x201D;url&#x201D;&#xFF09;&#x3002;
          <br
          />url&#x4F8B;&#xFF1A;<a href="http://chukong.oss-cn-qingdao.aliyuncs.com/uploads/201903/cpk/46b790b0da91f7fb45853e897590fefb.cpk?1552472595296">http://chukong.oss-cn-qingdao.aliyuncs.com/uploads/201903/cpk/46b790b0da91f7fb45853e897590fefb.cpk?1552472595296</a>
        </p>
        <p>File&#x4F8B;&#xFF1A;</p>
        <p>/cocosgame/game.cpk</p>
      </td>
    </tr>
  </tbody>
</table>