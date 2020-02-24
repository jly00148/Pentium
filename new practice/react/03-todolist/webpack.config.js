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

            //babel
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env','react'],
                        plugins:[["import",{"libraryName":"antd","libraryDirectory":"es","style":"css"}]] //antd 按需索取css，不必加载全部css
                    }
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            inject:true,
            hash:false // //给生成的js/css文件添加唯一一个的hash,true是生成,false是关闭
        }),
        new CleanWebpackPlugin()
    ],

    // webpack-dev-server提供了一个简单的基于node express的web服务器,能够实时重新加载页面
    devServer:{
        contentBase:'./dist',//内容的目录
        port:8080//服务器运行的端口
    }

}