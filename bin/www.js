var IS_PROD = process.env.NODE_ENV == 'production'
var app = require(IS_PROD ? '../dist' : '../server')
var http = require('http')


var PORT = process.env.GUN_PORT || 3000
var server = http.createServer(app.default)

server.listen(PORT)

server.on('listening', function() {
  console.log('Listening on', PORT)
})
