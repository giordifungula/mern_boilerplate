const express =  require('express')

const router = express.Router()

router.get('/signup', (req,res) => {
    console.log("Testing the data")
    res.json({
        data: 'You git the base endpoint'
    })
})

module.exports = router
