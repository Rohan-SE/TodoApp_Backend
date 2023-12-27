import mongoose from 'mongoose'

const userModel = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    username:String
})

const users = mongoose.model('user', userModel,'users')
export default users;