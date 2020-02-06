const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 新用法
// console.log(CleanWebpackPlugin);
module.exports = {
    mode:'development',
    entry:{// 入口
        index:'./src/index.js'
    },
    output:{
        filename:'[name].[hash].bundle.js',
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
            {
                test:/\.(jpg|jpeg|png|gif)$/i,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:10
                        }
                    }
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env','react']
                    }
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html',//模板文件
            filename:'react.html',//输出的文件名
            inject:true,//脚本写在哪个标签里，默认是true，在body之后
            hash:true//给生成的js/css文件添加唯一一个的hash
        }),
        new CleanWebpackPlugin()
    ],
    devServer:{
        contentBase:'./dist',//内容的目录
        port:8080//服务器运行的端口
    }

}