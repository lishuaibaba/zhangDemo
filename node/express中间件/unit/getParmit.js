let url = require("url");
let qs = require("querystring")

function getPmarit() {
    return (req, res, next) => {
        if (req.method == "GET") {
            let a = url.parse(req.url)
            let { query } = a;
            let obj = qs.parse(query);
            req.zzz = obj;
        }
        next();
    }
}


module.exports = getPmarit;