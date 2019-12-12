const path = require('path');

module.exports = {
	//指定打包文件
	mode:'development',
	//指定出口
	//多个出口
	entry:{
		main:'./src/index.js',
		about:'./src/about.js',
		contact:'./src/contact.js'
	},
	//单个出口
	//entry:'./src/index.js',



	//指定出口
	output:{
		//出口文件名称
		filename:'[name].[hash].bundle.js',
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