import express from "express";
// import { calciatori } from "./data";
const calciatori = [
    {
        id: 1,
        nome: "Cristiano Ronaldo",
        img: "./img/cristianoronaldo.jpg",
        tags: ["colpo di testa", "attaccante"],
    },
    {
        id: 2,
        nome: "Lionel Messi",
        img: "./img/lionelmessi.jpg",
        tags: ["colpo di testa", "attaccante"],
    },
    {
        id: 3,
        nome: "Scott Mc Tominay",
        img: "./img/scottmctominay.jpg",
        tags: ["colpo di testa", "attaccante"],
    },
    {
        id: 4,
        nome: "Neymar",
        img: "./img/neymar.jpg",
        tags: ["colpo di testa", "attaccante"],
    },
    {
        id: 5,
        nome: "Eden Hazard",
        img: "./img/edenhazard.jpg",
        tags: ["colpo di testa", "attaccante"],
    },
    {
        id: 6,
        nome: "Marek Hamsik",
        img: "./img/marekhamsik.jpg",
        tags: ["colpo di testa", "attaccante"],
    },
    {
        id: 7,
        nome: "Edinson Cavani",
        img: "./img/edinsoncavani.jpg",
        tags: ["colpo di testa", "attaccante"],
    },
]

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