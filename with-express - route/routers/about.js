const express = require('express')
const router = express.Router()

router.get('/about', (req, res) => res.send('From about!'))
router.post('/about', (req, res) => res.send('From about!'))

module.exports = router