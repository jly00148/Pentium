const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 新用法
// console.log(CleanWebpackPlugin);
module.exports = {
    mode:'development',
    entry:{// 入口
        common:'./src/page/common/common.js',
        index:'./src/page/index/index.js'
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
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/view/index.html',
            filename:'index1.html',
            inject:true,
            hash:true
        }),
        new CleanWebpackPlugin()
    ]

}