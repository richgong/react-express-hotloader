import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import home from './routes/home.js'
import test from './routes/test.js'


let IS_PROD = process.env.NODE_ENV == 'production'
let app = express()


if (!IS_PROD) { // setup HotLoader
    var webpack = require('webpack')
    var config = require(path.join(process.cwd(), 'webpack.config'))

    var entry = config.entry;
    for (var key in entry) {
        if (key.startsWith('load')) {
            console.warn("hotLoading:", key)
            entry[key] = [
                'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
                'react-hot-loader/patch',
                entry[key]]
        }
    }

    config.module.rules[0].use.options.plugins = ['react-hot-loader/babel']
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    config.plugins.push(new webpack.WatchIgnorePlugin([
        path.join(process.cwd(), './node_modules/')
    ]))

    var publicPath = config.output.publicPath
    config.output.publicPath = 'http://localhost:3000' + publicPath

    var compiled = webpack(config)

    app.use(require('webpack-dev-middleware')(compiled, {
        noInfo: true,
        publicPath: config.output.publicPath
    }))

    app.use(require('webpack-hot-middleware')(compiled))
}

// middle ware

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))


// routes

app.use('/', home);
app.use('/test', test)


// error handling

app.use((req, res, next) => {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV == 'production' ? {} : err
    res.status(err.status || 500)
    console.error("ERROR:", err)
    res.render('error')
})

export default app
