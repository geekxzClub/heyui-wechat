<p align="center">
    <img width="150" class="QR-img" src="https://oss.geekxz.com/hey-ui-oss/logo.jpg">
</p>

<div align="center">
    <span><a target="_blank" href="http://heyui.geekxz.com/component/basic/button.html">:memo: 中文文档</a></span>
    <span>|</span>
    <span><a target="_blank" href="http://heyui.geekxz.com/component/basic/button.html">:computer: 官方教程</a></span>
</div>

<div align="center">
    <span>Hey UI, not just an UI component library!</span><br/>
    <strong>Hey UI 是基于微信小程序原生语法,实现的CSS UI框架。</strong>
</div>



## 目录

- [目录](#目录)
- [简介](#简介)
- [快速上手](#快速上手)
  - [安装](#安装)
  - [引入](#引入)
- [讨论交流](#讨论交流)
- [贡献代码](#贡献代码)
- [源码演示](#优秀源码演示)
- [开源协议](#开源协议)
- [赞助](#赞助)


## 简介

  Hey UI 是基于微信小程序原生语法,实现的CSS UI框架,面向全层次的小程序开发者,低门槛开箱即用的前端 UI 解决方案.


## 快速上手

  直接通过git下载 Hey UI 源代码，并将 src 目录（所有文件夹）拷贝到自己的项目中.
  ```
  git clone https://github.com/geekxzClub/heyui-wechat.git
  ```


### 安装

1.初始化你的项目

  使用微信开发正工具新建项目.

2.按转Hey UI

  下载源码解压获得`/template`，复制目录下的 `/heyui`,`/component`,`/libs`,`/static` 文件夹到你的项目根目录.

  `App.wxss` 引入关键Css `main.wxss`,`icon.wxss`.

  ```
  /**app.wxss**/
  @import "heyui/heyui.main.wxss";
  @import "heyui/icon.wxss";
  /* 引入主题色 */
  @import "heyui/theme.wxss";
  @import "app.css"; /* 你的项目css */
  ....
  ```
### 引入

1.引入核心的函数库

  在`js`中引入 `h-string.js`,`h-array.js`,`h-is.js`
  ```
  import { HString } from '/libs/h-string.js';
  import { HArray } from '/libs/h-array.js';
  import { HIs } from '/libs/h-is.js';

  var Hstring = new HString();  //实例化 
  ....
  ```

2.使用函数库

  ```
  Hstring.toString()
  ....

  ```
  至此，Hey UI 已成功引入至你的项目中了！

## 讨论交流

微信群：加入微信群请先添加开发者微信，备注HeyUI。QQ群：689112212 或扫描二维码。

<p align="center">
    <img width="800" src="https://oss.geekxz.com/hey-ui-oss/communication_primary.png">
</p>

## 贡献代码

我们的代码基于 develop 分支开发，欢迎提交 Pull Request 进行代码贡献。

在提交 Pull Request 之前，请详细阅读我们的[开发规范](http://heyui.geekxz.com/start/contribute.html)，否则可能因为 Commit 信息不规范等原因被关闭 Pull Request。

## 优秀源码演示

开源不易，需要鼓励。给 HeyUI项目点个 star吧！

HeyUI组件库小程序原生版本，该开源版源码为V1.0.1版本。后续更新更多源码

1.源码展示

|  ![微信小程序](https://oss.geekxz.com/hey-ui-oss/logo.jpg) |![HeyUI示例](https://oss.geekxz.com/hey-ui-oss/logo.jpg)  |
| ------------ | ------------ |
|  微信小程序  | HeyUI示例    |

2.商城小程序

3.抽奖小程序

4.预约小程序

5.博客小程序

6.投票小程序

7.问卷小程序

## 开源协议

[MIT](LICENSE) © 2021  PP_Team


## 赞助

![](https://oss.geekxz.com/hey-ui-oss/communications.png)

| 时间        	| 名称          | 金额       | 留言  		    |
| ------------- |:-------------:| :---------:|:-------------|
| 2021-03-01    |李*木          | 50元       |感谢
| 2021-03-01    |李*木			    | 20元 	     |感谢