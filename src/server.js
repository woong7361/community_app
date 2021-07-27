import express from "express";
import morgan from "morgan";

const PORT_NUMBER = 5000;

const app = express();
app.use(morgan("dev"))

const handeler = (req,res) => {
    res.redirect('http://google.com')
}

app.get("/new", handeler);

const handleListening = () => {
    console.log(`Server is running on http://localhost:${PORT_NUMBER} `);
} 

app.listen(PORT_NUMBER,handleListening);