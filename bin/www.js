var IS_PROD = process.env.NODE_ENV == 'production'

var http = require('http')
var app = require(IS_PROD ? '../dist' : '../server').default


var PORT = process.env.GUN_PORT || process.env.PORT || 3000
var server = http.createServer(app)

server.listen(PORT)

server.on('listening', function() {
    console.log('Listening IS_PROD=', IS_PROD, PORT)
})
