const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 自动清理输出多余HTML文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // mode:'development',//mode用来指定环境，development或者production,已经分离出去
    // 指定打包的入口文件
    entry:{
        common:'./src/pages/common/common.js',
        index:'./src/pages/index/index.js'
    },

    //出口
    output:{
        filename:'[name]-[hash]-bundle.js',//指定打包后的文件名称,name:chunk名称,[fullhash]:模块标识符，每次打包模块hash不同，同次打包hash不同
        publicPath:'/',//静态资源指定输出参考路径
        path:path.resolve(__dirname,'dist')//指定打包存放路径
    },

    module:{
        rules:[
            //处理css
            {
                test:/\.css$/i,
                /*
                use:[
                    'style-loader',
                    'css-loader'
                ]
                */
                use:[//处理生成自动生成css文件更改上述配置重新配置use，保留'css-loader'
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{

                        }
                    },
                    'css-loader'
                ]

            },
             //处理图片
            {
                test:/\.(jpg|jpeg|png|gif)$/i,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:10// 超出limit限制后会生成一个文件，否则生成base64
                        }
                    }
                ]
            }
        ]
    },

    plugins:[
        new htmlWebpackPlugin({
            template:'./src/view/index.html',//模板文件
            filename:'index.html',//输出的文件名，自动生成在dist文件夹内
            inject:true,//脚本写在哪个标签里，默认true在body之后
            hash:true,//给生成的文件的添加唯一的hash
            chunks:['index','common']//需要包含入口的chunk
        }),
        new MiniCssExtractPlugin({
            filename:'resource/[name]-[hash].css'
        }),
        new CleanWebpackPlugin()
    ],

    //分离出去
    /*
    devServer:{
        contentBase:'./dist',//内容的目录，将dist目录下的文件serve到localhost：8080下运行
        port:8080//服务运行的端口
    }
    */
}