let express = require("express");
let router = express.Router();

router.route("/").get((req,res)=>{
    res.render("home");
})


module.exports = router;