const path = require('path');
module.exports = {
    mode: 'none',
    entry: './config/config.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                loader:'babel-loader',
                query:{
                    presets:['es2015']
                }
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }

};