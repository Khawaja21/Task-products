const express = require("express");
const app = express();
const port = 2000;

app.get("/", (req,res) => {
       res.send("welcome to my home page");
});

app.post("/", (req,res) => {
    res.send("welcome to my home page");
});

app.get("/about", (req,res) => {
    res.status(100).send("welcome to my about page");
});

app.get("/contact", (req,res) => {
    res.send("welcome to my contact page");
});

app.listen(port,() => {
    console.log(`Listening to the port no. ${port}`);
});
