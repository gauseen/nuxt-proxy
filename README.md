#### 问题描述

现在 web 开发都是前后端分离的年代，前后端分离的好处我就不啰嗦了，进入问题 ==>>>
使用 nuxt.js 本地开发 Vue 项目时，ajax 请求时可能会遇到跨域问题，控制台具体报错形式如下：
```
Failed to load http://example.com/api/somethings.do: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access.
```
##### 这就是因为跨域问题导致的结果。
于是鄙人写了一个解决 nuxtjs 本地开发跨域问题的 npm 包，具体安装及其使用方式如下：

## Nuxt.js Proxy Module

参考资料请看 [nuxtjs api](https://nuxtjs.org/guide/modules)，
nodejs 中间件 [http-proxy-middleware api](https://github.com/chimurai/http-proxy-middleware)

#### 使用步骤：
一、 安装 @gauseen/nuxt-proxy 依赖资源
```
npm install --save-dev @gauseen/nuxt-proxy
```
二、 添加 ```@gauseen/nuxt-proxy``` 资源至 ```nuxt.config.js``` 文件的 ```modules``` 对象之下

#### 举个栗子：
```
// nuxt.config.js

modules: [
	// 请求代理配置，解决跨域
	'@gauseen/nuxt-proxy',
],
proxyTable: {
	'/api': { target: 'http://example.com', ws: false }
},
```
#### 注：
```
/api ———————— 每个接口特定标识字段 [String]
target —————— 目标代理服务 [String]
ws —————————— 是否支持 websocket 代理 [Boolean]
```
- 欢迎访问我的个人博客 [攻城狮传送门](https://gauseen.github.io)，
- 未经作者允许，禁止转载，谢谢！
- 欢迎留言、评论！