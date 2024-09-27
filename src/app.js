const express = require("express");

const app = express();

app.use("/", (req, res) => {
    res.send("Hello from the server!");
});

app.use("/hello",(req, res) => {
    res.send("Hello Hello Hello!")
});

app.use("/test", (req, res) => {
    res.send("Hello I'm tester!");
});

app.listen(7777, () => {
    console.log("Server is successfully running on 7777....");
    
});