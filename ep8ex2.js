const fs = require("fs");

var a = 100;

setImmediate(()=> console.log("setImmediate 1st async task"));

Promise.resolve("Promise 2nd async task").then(console.log);

fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("read the file 3rd async task");
})

setTimeout(()=>{ console.log("setTimeout 4th async task"); },0);

process.nextTick(()=>console.log("nextTick 5th async task"));

const print = (a) => {
    console.log("a=",a)
}

print(a);

console.log("end of code");