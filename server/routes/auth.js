const express =  require('express')

const router = express().router()

router.get('/', (req,res) => {
    console.log("Testing the data")
    res.json({
        data: 'You git the base endpoint'
    })
})

module.exports = router
