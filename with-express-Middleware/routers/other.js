const express = require('express')
const router = express.Router()

router.get("/", (req, res) => res.render("index.pug"));
router.get("/about", (req, res) => res.send("From about"));
router.get("/co(nt)?act", (req, res) => res.send("From contact"));
router.get("/u?se?r", (req, res) => res.send("From user"));
router.get("/cont*act2", (req, res) => res.send("From contact-2"));
router.get("/cont+act3", (req, res) => res.send("From contact-3"));

router
  .get("/helping", (req, res) => res.send("From Help"))
  .post("/helping", (req, res) => res.send("From Help"))
  .put("/helping", (req, res) => res.send("From Help"))
  .delete("/helping", (req, res) => res.send("From Help"));

router.get("/image/:imageId/:userId?", (req, res) =>
  res.send("From Image Img Id:" + req.params.imageId)
);

module.exports = router
