const express = require('express')
const router = express.Router()

const isAuth = require("../helpers/isAuth")

router.get('/about', (req, res) => res.send('From about!'))
router.post('/about',isAuth ,(req, res) => res.send('From about!'))

module.exports = router