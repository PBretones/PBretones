require("./config/config");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Global routes config
app.use(require("./routes/index"));


// Mongoose connection

mongoose.connect("mongodb://localhost:27017/films", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});


const db = mongoose.connection;

db.on("error", (error) => {
    console.log("ERROR LOL", error);
});

db.once("open", () => {
    console.log("Va bien bro");
})
app.listen(process.env.PORT, () => {

    console.log("Listening at port: ", 3000);
});