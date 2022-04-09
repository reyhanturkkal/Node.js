const fs = require('fs') //for reading files
const http = require('http') //to serve file to users
const myFile = 'video.mp4'
const myServer = http.createServer()

myServer.on('request',(req,res)=>{

    // fs.readFile(myFile,(err,data)=>{
    //     if(err){throw err}
    //     res.end(data)
    // })
    const myReadStream = fs.createReadStream(myFile)
    myReadStream.pipe(res)
})

myServer.listen(5000)