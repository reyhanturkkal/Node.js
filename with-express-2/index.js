const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.static("public-2"));

// ab?out => means that ab is not required but after '?' is required. it will response
// if a or b is not using.Values that before the QUESTION MARK are optional

app.get("/", (req, res) => res.render("index.pug"));
app.get("/about", (req, res) => res.send("From about"));
// when n AND(&&) t is not using in url it can response
app.get("/co(nt)?act", (req, res) => res.send("From contact"));
// this can response that => sr,ser,usr
app.get("/u?se?r", (req, res) => res.send("From user"));
//star means that it can takes value or not to between cont - act2
app.get("/cont*act2", (req, res) => res.send("From contact-2"));
// plus means character that right behind to plus can writable again and again
// contttact3
app.get("/cont+act3", (req, res) => res.send("From contact-3"));

// app.get('/helping', (req, res) => res.send('From Help'))
// app.post('/helping', (req, res) => res.send('From Help'))
// app.put('/helping', (req, res) => res.send('From Help'))
// app.delete('/helping', (req, res) => res.send('From Help'))

// routing logic => it runs first option that provides exp-> '30 Get' provides first so '35 All' not runs
app
  .get("/helping", (req, res) => res.send("From Help"))
  .post("/helping", (req, res) => res.send("From Help"))
  .put("/helping", (req, res) => res.send("From Help"))
  .delete("/helping", (req, res) => res.send("From Help"));

// All Methods => app.all('/info', (req, res) => res.send('From Info'))
//Send params with GET
app.get("/image/:imageId/:userId?", (req, res) =>
  res.send("From Image Img Id:" + req.params.imageId)
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
