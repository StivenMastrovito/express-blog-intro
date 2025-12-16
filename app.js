import express from "express";
import { calciatori } from "./data";

const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("App avviata con successo sulla porta ", port);
});
