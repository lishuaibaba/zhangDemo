let EventEmitter = require("events").EventEmitter;

let event = new EventEmitter();

var fn = function () { console.log('123') };
event.addListener("click", fn)
event.addListener("click", function () { console.log('321'); })

event.removeListener("click",fn)

event.emit("click")


