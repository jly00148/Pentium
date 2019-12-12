const path = require('path');

module.exports = {
	//指定打包文件
	mode:'development',
	//指定出口
	entry:'./src/index.js',
	//指定出口
	output:{
		//出口文件名称
		filename:'bundle.js',
		//出口文件 所在的目录
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/i,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			//处理图片
			{
				test:/\.(png|jpg|gif|jpeg)$/i,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:100000
						}
					}
				]
			}
		]
	}
};