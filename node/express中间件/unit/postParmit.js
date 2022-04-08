let qs = require("querystring");

function postParmit(){
    return (req, res, next) => {
        
        let bufs = [];

        req.on("data",buf=>{
            bufs.push(buf);
        })

        req.on("end",()=>{
            let bufa = Buffer.concat(bufs);
            let obj = qs.parse(bufa.toString());
            req.obj = obj;
            next();
        })
    }
}


module.exports = postParmit;