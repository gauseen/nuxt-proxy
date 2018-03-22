const Proxy = require('http-proxy-middleware')

module.exports = function nuxtProxyTable (proxyOptions) {
	const proxyTable = this.options.proxyTable
	const proxys = []

	if (!proxyTable) {
		console.log('proxyTable options cannot be empty !')
		return
	}

	const defaultConfig = Object.assign({
		target: '',
		// needed for virtual hosted sites
		changeOrigin: true,
		// proxy websockets
		ws: false,
	},
	proxyOptions
	)

	const getConfigs = (o) => Object.assign({}, defaultConfig, o)

	Object.keys(proxyTable).forEach(context => {
		proxys.push([
			context,
			getConfigs(proxyTable[context])
		])
	})

	// 注册中间件
	proxys.forEach(item => {
		const middlewareProxy = Proxy.apply(null, item)
		middlewareProxy.prefix = false
		this.options.serverMiddleware.push(middlewareProxy)
	})
}

module.exports.meta = require('../package.json')
