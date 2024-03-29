const path = require('path');

module.exports = {
    mode:'development',//开发环境
    // mode:'production',//生产环境
    entry:{
        mian:'./src/index.js',
        about:'./src/about.js',
        views:'./src/views.js'
    },
    // entry:'./src/index.js',//指定入口文件，写法二
    //指定出口
    output:{
        filename:'[name].[hash].bundle.js',
        // filename:'[name].[chunkhash].bundle.js',
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
    }
}

// npx webpack --watch,自动打包，src里的文件有更新自动打包，本文件内容变更需要重新执行npx webpack或者npx webpack --watch