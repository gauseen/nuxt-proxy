### Nuxt.js Proxy Module

参考资料请看 [nuxtjs api](https://nuxtjs.org/guide/modules)，
nodejs 中间件 [http-proxy-middleware api](https://github.com/chimurai/http-proxy-middleware)

### 使用步骤：
1. 安装 @gauseen/nuxt-proxy 依赖资源
```
npm install --save-dev @gauseen/nuxt-proxy
```
2. 添加 ```@gauseen/nuxt-proxy``` 资源至 ```nuxt.config.js``` 文件的 ```modules``` 对象之下

### 例如：
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
### 注：
```
/api ———————— 每个接口特定标识字段 [String]
target —————— 目标代理服务 [String]
ws —————————— 是否支持 websocket 代理 [Boolean]
```