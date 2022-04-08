let express = require("express");

let router = express.Router();


router.get("/",(req,res)=>{
    res.send("home页面")
})

router.get("/code",(req,res)=>{
    res.send("验证码")
})

module.exports = router;