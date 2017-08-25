const webpack = require('webpack');
const path = require('path');
module.exports = {
	 entry:'./src/app.js',
	 output:{
		 path:path.resolve(__dirname,'public'),
		 filename:'bundle.js'
	 },
	target:'web',
	watch:true,
	module:{
		loaders:[
			{
				test:/\.jsx?/,
				loader:'babel-loader',
				exclude:/node_modules/,
				query:{
					presets:['react','es2015','stage-1']
				}
			}
		]
	},
	devtool:'cheap-module-eval-source-map'
}