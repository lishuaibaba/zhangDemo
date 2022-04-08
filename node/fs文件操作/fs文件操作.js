console.log(__dirname);

let fs = require("fs");

fs.writeFile("./shici.txt",'我我我我啊大苏打阿斯顿',(err)=>{
    console.log(err);
});               