const userController = require('../models/controllers/user.controller')
const express = require('express')
const router = express.Router() 

router.post('/',userController.create)
router.get('/',userController.allUsers)

module.exports = router