// User Schema code
const mongoose = require('mongoose')
const crypto = require('crypto') // will hash the password

// virtual field
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true,
        max: 32
    },
    email: {
        type: String,
        trim: true,
        require: true,
        lowercase: true,
        unique: true
    },
    hashed_password: {
        type: String,
        require: true,
    },
    salt: {
        type: String
    },
    role: {
        type: String,
        default: 'subscriber'
    },
    resetPasswordLink: {
        data: String,
        default: ''
    }
},{timestamps: true})

// virtual fields
userSchema.virtual('password')
.set(function(password){
    this._password = password
    // set the password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
})
// methods to hash the password
.get(function(){
    return this._password
    // get the hashed password
})
userSchema.methods = {
    authenticate: function(text){
        return this.encryptPassword(text) === this.hashed_password
        // if the plain password is hashed we can authenticate teh user
    },
    encryptPassword: function(password){
        // need to hash the password
        if(!password) return ''
        try {
            return crypto.createHash('sha1', this.salt)
            .update(password)
            .digest('hex')
        } catch(err){
            return ''
        }
    },
    makeSalt: function(){
        return Math.round(new Date().valueOf() * Math.random()) + ''
    }

}

module.exports = mongoose.model('User', userSchema)