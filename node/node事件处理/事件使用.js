let fs = require("fs");

let readStream = fs.createReadStream("./shici.txt");

readStream.on("open",()=>{})
readStream.on("data",()=>{})
readStream.on("end",()=>{})
readStream.on("close",()=>{})
readStream.on("error",()=>{}) 