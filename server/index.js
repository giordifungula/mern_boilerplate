const express =  require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config

const app = express()

//route here
const authRoutes = require('./routes/auth')
app.use(morgan('dev'))

// middleware
app.use('/api' , authRoutes)  // default route param here


const port = process.env.port || 5000

app.listen(port, ()=> {

    console.log(`We are running on port ${port}`)

})