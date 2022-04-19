const express = require("express");
let app = express();
const port = 3000;
const userRooter = require('./rooters/user.rooter')

app.get("/", (req, res) => {
  res.send("welcome to backend");
});
app.listen(port, () => {
  console.log(`Port : ${port}`);
});

app.use('/users',userRooter)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
