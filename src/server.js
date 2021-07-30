import express from "express";
import "dotenv/config"; 
import "./db.js";
import logger from "morgan";
import { 
    handle404    
} from "./handler/handler.js";
import userRouter from "./routers/userRouter.js"

const PORT_NUMBER = process.env.PORT || 5000;

const app = express();
// app.use(logger("dev"))
app.use(logger("combined"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use("/users",userRouter);


app.use(handle404);               //404 errorhandling
const handleListening = () => {
    console.log(`Server is running on http://localhost:${PORT_NUMBER} `);
} 

app.listen(PORT_NUMBER,handleListening);