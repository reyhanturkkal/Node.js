const express = require("express");
const app = express();
const port = 3000;
//control + shift + p faker vscode snippet

app.set("view engine", "pug");

//app.get('/', (req, res) => res.send('Hello World!'))
//line 11 sendindg parameter to index
app.get("/", (req, res) =>               
  res.render("index", {name:"Norwood",phone:"1-632-792-9987 x71146",text:"In odit nobis et dolor maiores officiis autem qui unde. Voluptas consequuntur necessitatibus dicta sint distinctio sit dolor vitae. Dolores rem qui aliquid et dolore pariatur sunt magnam a. Non reiciendis asperiores sunt iste iusto officia dignissimos non et."})
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
