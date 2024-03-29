const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  //指定打包环境
  mode:'production',
  //指定入口
  //单入口写法一
  entry:{
    //chunk名称:文件路径
    common:'./src/page/common/index.js',    
    main:'./src/page/index/index.js'
  },
  //单入口写法二
  //entry: './src/index.js',
  //指定出口
  output: {
    //出口文件名称
    filename: '[name].[hash].bundle.js',
    //出口的文件所在的目录
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
    //处理css文件
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      //处理图片 
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
            {
              loader: 'url-loader',
              options: {
                  limit: 100
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
          inject:true,//脚本写在那个标签里,默认是true(在body结束后)
          hash:true//给生成的js/css文件添加一个唯一的hash
      }),
      new CleanWebpackPlugin()
  ],
  devServer:{
    contentBase: './dist',//内容的目录
    port:8080//服务运行的端口
  }     
};