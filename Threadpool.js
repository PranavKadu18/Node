process.UV_THREADPOOL_SIZE = 1;
console.log(process.env.UV_THREADPOOL_SIZE);

const fs = require("fs");
const crypto = require("crypto");




crypto.pbkdf2("pranav","salt",5000000,50,"sha512",(err,key) => {
    console.log("1 key generated");
})

crypto.pbkdf2("sherya","salt",5000000,50,"sha512",(err,key) => {
    console.log("2 key generated");
})

crypto.pbkdf2("sherya","salt",5000000,50,"sha512",(err,key) => {
    console.log("3 key generated");
})

crypto.pbkdf2("sherya","salt",5000000,50,"sha512",(err,key) => {
    console.log("4 key generated");
})

crypto.pbkdf2("sherya","salt",5000000,50,"sha512",(err,key) => {
    console.log("5 key generated");
})

crypto.pbkdf2("pranav","salt",5000000,50,"sha512",(err,key) => {
    console.log("1 key generated");
})

crypto.pbkdf2("sherya","salt",5000000,50,"sha512",(err,key) => {
    console.log("2 key generated");
})

crypto.pbkdf2("sherya","salt",5000000,50,"sha512",(err,key) => {
    console.log("3 key generated");
})

crypto.pbkdf2("sherya","salt",5000000,50,"sha512",(err,key) => {
    console.log("4 key generated");
})

crypto.pbkdf2("sherya","salt",5000000,50,"sha512",(err,key) => {
    console.log("5 key generated");
})