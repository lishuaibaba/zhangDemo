const express = require("express");
const app = express();

app.get("/user/:userid/zzz/:zzzid",(req,res)=>{
    console.log(req.params);
    res.write("over");
    res.end();
});

app.listen(3000,()=>{
    console.log("express 3000");
})