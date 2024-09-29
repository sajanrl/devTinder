const express = require("express");

const app = express();

app.get("/user",
    [
        (req, res, next) => {
        console.log("Handling the route user 1 !");
        // res.send("1st response");
        next();   
    },
    (req, res, next) => {
        console.log("Handling the route user 2 !");
        // res.send("2nd response");
        next();   
    }],
    (req, res, next) => {
        console.log("Handling the route user 3 !");
        // res.send("3rd response");
        next();   
    },
    (req, res, next) => {
        console.log("Handling the route user 4 !");
        // res.send("4th response");
        next();   
    },
    (req, res, next) => {
        console.log("Handling the route user 5 !");
        // next();   
        res.send("5th response");
    }
    )

app.listen(7777, () => {
    console.log("Server is successfully running on 7777....");
    
});

// res.send({firstName: "Sajan", lastName: "Kattumuri"});