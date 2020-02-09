const express =  require('express')

const app = express()

app.get('/', (req,res)=> {
    console.log("Testing the data")
    res.json({
        data: 'You git the base endpoint'
    })
})

const port = process.env.port || 5000
app.listen(port, ()=> {
    console.log(`We are running on port ${port}`)
})