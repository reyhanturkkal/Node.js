const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.static("public-2"));

const user = require('./routers/user')
const about = require('./routers/about')
const other = require('./routers/other')

const isAuth = require('./helpers/isAuth')
//app.use('/user',isAuth)

app.use('/',user)
app.use('/',about)
app.use('/',other)
//app.use('/data/',other) with prefix

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
