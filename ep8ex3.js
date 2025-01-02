const fs = require("fs");

setTimeout(() => {console.log(" 1st setTimeout")},0);

Promise.resolve("1st Promise").then(console.log);

fs.readFile("./file.txt","utf-8",(err,data) => {
    setTimeout(() => {console.log(" 2nd setTimeout")},0);
    
    process.nextTick(() => {console.log("2nd nextTick")});

    setImmediate(() => {console.log("2nd setImmediate")});

    console.log("File reading complete");
})

process.nextTick(() => {console.log("1st nextTick")});

console.log("code end");