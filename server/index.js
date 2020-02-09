const express =  require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

//route here
const authRoutes = require('./routes/auth')
app.use(morgan('dev')) // log requests
app.use(cors())
app.use(express.json()) // parse the response into json

// middleware
app.use('/api' , authRoutes)  // default route param here

if(process.env.NODE_ENV == 'development') {
    app.use(cors({
        origin: `http://localhost:3000`
    }))
}
const port = process.env.PORT 

app.listen(port, ()=> {

    console.log(`We are running on port ${port}`)

})