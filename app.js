import express from "express";
import {calciatori} from "./data.js";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
    console.log("App avviata con successo sulla porta ", port);
});

app.get("/", (req, res) => {
    res.send("Ciao benvenuto nel mio Blog dei calciatori");
})

app.get("/bacheca", (req, res) => {
    res.json({
        info: {
            totali: calciatori.length,
        },
        result: calciatori, 
    })
})