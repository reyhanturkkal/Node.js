const fs = require('fs')
const file = 'video.mp4'
var path = require('path')
//extansion name 
console.log(path.extname(file))
 var myFieldExt = path.extname(file)

const myReadStream = fs.createReadStream(file)
//new name
const myWriteStream = fs.createWriteStream('newVideo'+ myFieldExt)

myReadStream.pipe(myWriteStream)

myWriteStream.on('finish',()=>{
    console.log('Finished writeStream')
})