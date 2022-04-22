const fs = require('fs')
const http = require('http')

const myServer = http.createServer((req,res)=>{
    console.log('request')
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    fs.readFile('server.html',(err,data)=>{
        if(err){
            throw err;
        }
        response.end(data)
    })
})
myServer.listen(3000)