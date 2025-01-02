const https = require("https");
const fs = require("fs");
const crypto = require("crypto");
//above all are modules in node ie the superpowers

console.log("GEC loaded in call stack");


var a = 1021343
var b = 342325

//pbkdf2 -> password based key derivation fnuction version 2 = it is used to genereate key for the passwoed
//note : when async task is present it has a callback because it is to be loaded in call stack of V8 when async task will be over 

//this sync task is blocking the entire thread as V8 is executing it
const key = crypto.pbkdf2Sync("pranav","salt",5000000,50,"sha512");
console.log("sync key generated -> ");


https.get("https://fakestoreapi.com",(data)=>{
    console.log("the data is acquired libuv has just used its superpower");
})

fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("data in file is " + data);
})

crypto.pbkdf2("pranav","salt",5000000,50,"sha512",(err,key) => {
    console.log("async key is generated -> ");
})

const multiply = (a,b) => {
    var c = a*b
    return c
}

console.log("Result is : " + multiply(a,b))