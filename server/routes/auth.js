const express =  require('express')

const router = express.Router()

//import controller
const {signup} = require('../controllers/auth')  //destructure the app

const {userSignupValidator} = require('../validators/auth')
const {runValidator} = require('../validators')

router.post('/signup', userSignupValidator, runValidator ,  signup )

module.exports = router
