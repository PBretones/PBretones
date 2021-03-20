const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const audioSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    mp3: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model("Audio", audioSchema);