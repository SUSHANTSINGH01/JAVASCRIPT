var http = require('http')

http.createServer(function(req,res)
{
    res.write("welcome to you") // res.end("welcome to you")
    res.end()
}).listen(8080)

