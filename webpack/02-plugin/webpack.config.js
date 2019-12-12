const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	//指定打包文件
	mode:'development',
	//指定出口
	//多个出口
	entry:{
		common:'./src/page/common/index.js',
		main:'./src/page/index/index.js',
	},
	//单个出口
	//entry:'./src/index.js',



	//指定出口
	output:{
		//出口文件名称
		filename:'[name]bundle.js',
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
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'./src/view/index.html',//模板文件
			filename:'index.html',//输出的文件名
			//inject:'head',//脚本写在那个标签里,默认是true(在body结束语后)
			hash:true //给生成的js/css文件添加一个唯一的hash
		}),
		new CleanWebpackPlugin()
	]
};