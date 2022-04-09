const fs = require('fs')

const file = 'video.mp4'
var count = 0;
let progress =0;

const myReadStream = fs.createReadStream(file)

//stat => information abput file
fs.stat(file,(err,data)=>{
    const total = data.size
    console.log('Total data size:',total)
    myReadStream.on('data',(chunk)=>{
        progress += chunk.length
        var per = (Math.round((100*progress)/total))+'%'
        console.log(per) 
        //console.log(++count,'data (chunk) came Size:',chunk.length)
    })
    myReadStream.on('end',()=>{
        console.log('Data reading finished')
    })
})

