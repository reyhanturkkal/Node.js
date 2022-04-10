const express = require('express')
const app = express()

app.get('/',(req,res)=>{
   res.send('Hello Express js')
})
app.get('/about',(req,res)=>{
    res.send('Hello Express js from about page')
 }) 
app.listen(3000,()=>{
    console.log('Express js running')
})
//app.listen(3000)