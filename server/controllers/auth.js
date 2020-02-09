exports.signup = (req , res) => {
    console.log("Req on Body", req.body)
    res.json({
        data: 'You git the base endpoint'
})
}