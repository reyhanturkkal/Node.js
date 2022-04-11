const fs = require('fs')

fs.readFile('demo.txt',(error,data)=>{
    if (error) {
        console.log(error)
    } else {
        console.log(data.toString())
    }
})