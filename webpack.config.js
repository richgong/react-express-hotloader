var path = require('path')
var webpack = require('webpack')


var IS_PROD = process.env.NODE_ENV == 'production'

module.exports = {
    entry: {
        loadThing: './react/loadThing'
    },
    output: {
        path: path.resolve(__dirname, './public/compiled/'),
        publicPath: '/compiled/',
        filename: '[name].jsx',
        library: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ // order matters (runs last to first)
                            ['es2015', { modules: false }],
                            'stage-2',
                            'react'
                        ]
                    }
                }
            },
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.jsx']
    },
    devtool: IS_PROD ? false : 'eval',
    plugins: IS_PROD ? [new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})] : []
}
