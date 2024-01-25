import mongoose from './root.js'

//email validate check
const validateEmail = (e) => {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e);
}

const userSchema = new mongoose.Schema({
    name: { type: String},
    gender: { type: String },
    email: { type: String, required: [true, "Email is required"],validate:validateEmail},
    userType: { type: String },
    important: { type: String},
    phone:{type:Number}
}, {
    collaction: 'users'
})

const UserModel = mongoose.model('users', userSchema)

export default UserModel