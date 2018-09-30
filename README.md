# Wechat-Mini-Gank
使用 Gank 接口，包含今日推荐、历史记录、搜索以及妹子图的微信小程序

### GIF 展示
![](https://github.com/wvisible/Wechat-Mini-Gank/blob/master/gif/demonstrate.gif)

### 扫码体验
可以使用微信扫描小程序码体验  
![](https://github.com/wvisible/Wechat-Mini-Gank/blob/master/gif/mini.png)

### 已完成页面
- 今日推荐展示 gank 最新消息,图文并茂
- 历史推荐展示 gank 10页数据，支持上拉加载和下拉刷新
- 详情页面跟今日推荐页面一致
- 搜索页面，支持类别搜索和关键字搜索
- 妹子图使用瀑布流实现，支持上拉加载和下拉刷新

首先声明，本人是一位 Android 开发者，刚接触前端不久，遇到问题主要以查询文档和网上找相关教程问题，本人使用的VS Code 开发， .wxml 和 .html 文件很像，.wxss 文件和 .css 文件很像，但是编译器并不知道，所以安装插件minapp、小程序助手，编辑器就能相关联了并且能使用智能提示，预览目前只能使用微信开发工具来实现预览。
实现的功能,具体实现可以看源码，都是比较简单，刚开始很多不熟悉，需要查文档和网上搜索
1. 多层列表
2. 多层列表点击实现样式改变，接收列表数据，点击事件等
3. 瀑布流实现
4. 上拉加载和下拉刷新
5. template 模板引用
6. 网络请求封装   

### 未实现
1. ~~请求失败点击重试~~
2. ~~添加图片查看器~~
3. 视频播放，只支持视频源的文件
4. webview打开相应的网页，微信限制，个人类型与海外类型的小程序暂不支持使用并且必须配置业务域名

### License
Wechat-Mini-Gank is licensed under the MIT license. See the LICENSE.txt file for more information.
