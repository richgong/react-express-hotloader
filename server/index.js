import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import home from './routes/home.js'
import test from './routes/test.js'


let app = express()

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
