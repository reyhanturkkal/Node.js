const http = require('http')

const myServer = http.createServer((request,response)=>{
   response.write('Node Js öüçşğ');
     response.writeHead(200,{'content-type':'text/html;charset=utf-8'})
     console.log(request.url)
     response.end('Node Js öüçşğ')
   // response.end();
   
})

myServer.listen(3000)