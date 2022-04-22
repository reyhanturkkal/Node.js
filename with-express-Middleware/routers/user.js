const express = require('express')
const router = express.Router()

router.get('/user', (req, res) => res.send('From user!'))
router.post('/user', (req, res) => res.send('From user!'))

module.exports = router