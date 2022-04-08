const express = require("express");

const app = express();

app.get("/listObj",(req,res)=>{
    let list = `{
        [
            {
                name:"张三",
                age:"18",
                sex:"男",
            },
            {
                name:"张三1",
                age:"181",
                sex:"男",
            },
            {
                name:"张三2",
                age:"182",
                sex:"女",
            }
        ]
    }`

    res.jsonp(list);
})

app.listen(3000,()=>{
    console.log("Server 3000");
})