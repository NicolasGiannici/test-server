require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//parse application/x-www-form-urlEncoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse aplication/json
app.use(bodyParser.json());

const puerto = process.env.PORT;

app.get("/usuario", (req, res) => {
    res.json('get usuarios');
});


app.post("/usuario/", (req, res) => {

    let persona = req.body;

    if (persona.nombre != undefined) {
        res.json({
            persona
        });
    } else {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario."
        });
    }
});


app.put("/usuario/:id", (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});


app.delete("/usuario", (req, res) => {
    res.json('delete usuarios');
});


app.listen(puerto, () => {
    console.log(`Escuchando puerto: ${puerto}`);
});