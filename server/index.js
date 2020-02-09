const express =  require('express')

const app = express()

//imports here
const authRoutes = require('./routes/auth')


const port = process.env.port || 5000

app.listen(port, ()=> {

    console.log(`We are running on port ${port}`)

})