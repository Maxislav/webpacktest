/**
 * Created by maxim on 10/27/16.
 */
//var LessPluginCleanCSS = require('less-plugin-clean-css');
const webpack = require('webpack')
module.exports = {
    entry: './src/app',
    output: {
        filename: 'build.js',
        path: './dist'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.styl/,
                exclude: /(node_modules|bower_components)/,
                loader: "style-loader!css-loader!stylus-loader"
            },
            {
                test: /\.js$/,
                loader: "babel?presets[]=es2015",
                exclude: /(node_modules|bower_components)/
            },

        ]
    },
   /* lessLoader: {
        lessPlugins: [
            new LessPluginCleanCSS({advanced: true})
        ]
    }
*/
};