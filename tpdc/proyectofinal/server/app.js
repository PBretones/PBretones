const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", require('./routes/modalidadRoutes'))
mongoose.connect('mongodb://localhost:27017/tpdc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})

app.use("/api", require('./routes/tipoRoutes'))
mongoose.connect('mongodb://localhost:27017/tpdc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})

app.use("/api", require('./routes/audioRoutes'))
mongoose.connect('mongodb://localhost:27017/tpdc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})

app.use("/api", require('./routes/authorRoutes'))
mongoose.connect('mongodb://localhost:27017/tpdc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})


app.use("/api", require('./routes/newsRoutes'))
mongoose.connect('mongodb://localhost:27017/tpdc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})




mongoose.connection.on('error', error => {
    console.log(error);
})

mongoose.connection.once('open', () => {
    console.log("CONECTAO");
})



app.listen(3002, () => {
    console.log("SERVER READY");
})