const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


console.log('__dirname', __dirname)
// /Users/ysangy/Code/webpacktest
//  webpack config 의 현재 경로를 보여 준다.
// __dirname 은 node.js 가 갖고 있는 전역 변수 이다.
console.log('dskfdjslk', path.resolve('../'))
// /Users/ysangy/Code
// 상대 경로를 보여준다. 현재에서 .. 를 찾는다면 
// /Users/ysangy/Code/webpacktest 에서 /webpacktest 를 제거한 
// /Users/ysangy/Code 가 되겠다.


module.exports = { 
    devtool: 'source-map',
    mode: 'development',
    entry: {
        main: __dirname + '/src/main.js'
    }, 
    output: { 
        path: __dirname + '/public', 
        filename: '[name]-[hash].js' 
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader",
                    options: {modules: true}
                    
                    }
                ]
            }
        
        ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            title : '직원 정보 조회2', 
            template : __dirname + '/assets/index.html', 
            filename : 'index.html'      
       }),
    //    new UglifyJsPlugin()
    ],

    devServer: {
        contentBase: "./public",
        inline: true,
        port: 3000,
        historyApiFallback: true

    }
 };