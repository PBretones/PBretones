const express = require('express');
const app = express();

const port = 3000;

// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');




//
app.use(express.static(__dirname + "/public"))


app.get('/pokemon', (req, res) => {
    res.render("servicios", { title: "Dynamic message" })
})

app.get('/', (req, res) => {
    res.render("index", { title: 'My dinamic title' })
    /* res.writeHead(200, { 'Content-type': 'application/json' }) */
})

app.use((req, res, next) => {
    res.status(404).render("404", {

        title: "404 ERROR FOUND",
        description: "Website Title"
    })
})

app.listen(port, () => {

    console.log('Server ready on your port', port);
})