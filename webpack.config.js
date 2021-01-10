const path = require('path');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = [
    {
        mode : "production",
        entry: {
            background : './src/background.js',
            contentScript : './src/contentScript.js',
        },
        output : {
            path : path.resolve(__dirname, "dist"),
            filename: "[name].js"
        },
        plugins : [
            new CopyPlugin({
                patterns : [
                    {from : "./src/popup.*", to : "[name].[ext]"}
                ]
            })
        ]
    }
]