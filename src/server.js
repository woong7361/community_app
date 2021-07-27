import express from "express";
import morgan from "morgan";

const PORT_NUMBER = process.env.PORT || 5000;

const app = express();
app.use(morgan("dev"))


const handeler1 = (req,res) => {
    res.send('1');
}

const handeler2 = (req,res) => {
    res.redirect('http://google.com');
}

app.get("/", handeler1);

app.get("/new", handeler2);
app.post("/new",handeler2);

const handleListening = () => {
    console.log(`Server is running on http://localhost:${PORT_NUMBER} `);
} 

app.listen(PORT_NUMBER,handleListening);