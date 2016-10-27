/**
 * Created by maxim on 10/27/16.
 */

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'build.js',
        path: './dist'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel?presets[]=es2015",
                exclude: /(node_modules|bower_components)/
            }
        ]
    }

};