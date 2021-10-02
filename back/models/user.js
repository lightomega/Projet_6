const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const modelUser = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

modelUser.plugin(uniqueValidator)

module.exports = mongoose.model('user', modelUser)