import express from "express";
import logger from "morgan";
import { handler1,
    handler2, 
    handler3 } from "./handler/handler.js";

const PORT_NUMBER = process.env.PORT || 5000;

const app = express();
// app.use(logger("dev"))
app.use(logger("combined"));
app.use(express.json());

app.get("/", handler1);

app.get("/new", handler2);
app.all("/users/login",handler3);
app.all("/users/:id/login",handler3);


const handleListening = () => {
    console.log(`Server is running on http://localhost:${PORT_NUMBER} `);
} 

app.listen(PORT_NUMBER,handleListening);