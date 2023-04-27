const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    id:{
        require: true,
        type:String
    },
    name :{
        require : true,
        type: String
    }
})

const User = mongoose.model('User',UserSchema)

module.exports = User