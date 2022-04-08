const express = require("express");

const app = express();

app.get("/",
    (req, res,next) => {
        console.log(1);
        next();
    },
    (req, res,next) => {
        console.log(2);
        next();

    },
    (req, res,next) => {
        console.log(3);
        res.end();
    }
)

app.listen(3000,()=>{
    console.log("3000")
})