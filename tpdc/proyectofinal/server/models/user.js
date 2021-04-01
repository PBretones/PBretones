const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    fav: {
        type: Array,
        default: []
    },
    avatar: {
        type: String,
        default: ""
    }
})

userSchema.methods = {
    authenticate: function (hashPassword) {
        return bcrypt.compare(hashPassword, this.password)
    }
}


module.exports = mongoose.model("User", userSchema);
