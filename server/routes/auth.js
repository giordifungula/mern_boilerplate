const express =  require('express')

const router = express.Router()

//import controller
const {signup} = require('../controllers/auth')  //destructure the app

router.get('/signup', signup )

module.exports = router
