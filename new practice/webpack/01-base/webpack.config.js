const path = require('path');

module.exports = {
    mode:'development',//开发环境
    // mode:'production',//生产环境
    entry:'./src/index.js',//指定入口文件
    //指定出口
    output:{
        filename:'bundle.js',
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