大咖问股 微信小程序 es6
    目录结构:
    -dkwg
        -common:通用的js文件
            -utils.js 工具类
            -const.js 常量类
            -login.js 登录相关
            -http.js  网络请求相关
            -data.js  请求数据相关类
            -handel.js 公有的操作方法 比如关注用户，取消关注，超值,订阅等
        -app.json: 小程序基本配置 包括注册的页面(pages),主窗口样式(window),底部导航(tabBar)
                    网络连接超时时间(networkTimeout) debug是否调式模式 等的配置
        -app.js： 程序全局共享的逻辑和数据,比如用户数据,日志逻辑等
        -app.wxss:全局样式文件
        -modules：模块 (都包含 js(处理逻辑与数据),json(配置),wxml(页面),wxss(样式,可覆盖app.wxss中的样式))
            -index:首页
            -bigname：大咖
            -note:笔记
            -question:问股
            -market:行情
            -my：个人中心
            -templates：模板文件 可复用的一些页面文件
        -resources:资源文件
            -data:模拟数据
            -css:css文件
            -fonts:字体文件
            -images：图片资源
            -lib：js第三方库
        -server：node服务 用户访问本地资源文件 启动方式:node ./server.js (需要安装node环境)



