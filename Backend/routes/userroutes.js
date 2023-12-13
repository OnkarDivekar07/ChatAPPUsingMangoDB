const express = require('express')

const auth=require('../Middleware/auth')
const router = express.Router()
const controller=require('../controller/usercontroller')


router.post('/login', controller.login)
router.post('/signup', controller.signup)
router.get('/searchall',auth.verifyToken, controller.allUsers)




module.exports = router