const mongoose = require("mongoose");



const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const validCategories = {
    values: ["DRAMA", "COMEDY", "THRILLER"],
    message: "{VALUE} is not a valid category"
}
const userSchema = new Schema({

    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true
    },
    date: {
        type: String,
        required: [true, "Date is required"],
        unique: true
    },
    img: {
        type: String,
        required: [true, "Image is required"]
    },
    category: {
        type: String,
        default: "USER",
        enum: validCategories
    },

})

userSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });
module.exports = mongoose.model("User", userSchema);