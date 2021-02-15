const mongoose = require("mongoose");



const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const validRoles = {
    values: ["ADMIN", "USER"],
    message: "{VALUE} is not a valid role"
}
const userSchema = new Schema({

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
    img: {
        type: String,
        required: [false]
    },
    role: {
        type: String,
        default: "USER",
        enum: validRoles
    },
    state: {
        type: Boolean,
        default: true
    }, // boolean
    google: {
        type: Boolean,
        default: true
    }, // boolean
})
userSchema.methods.toJSON = function () {

    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
}


userSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });
module.exports = mongoose.model("User", userSchema);