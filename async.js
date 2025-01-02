const https = require("https");
const fs = require("fs");

var a = 1021343;
var b = 342325;

const data = fs.readFileSync("./file.txt","utf-8");
console.log(data);


https.get("https://fakestoreapi.com", (res) => {
  console.log("the data is acquired libuv has just used its superpower");
});

// fs.readFile("./file.txt", "utf-8", (err,data) => {
//   console.log("Data inside the file is : " + data);
// });

setTimeout(() => {
  console.log("time has ran out i am executed after 5 sec");
}, 5000);

const multiply = (a, b) => {
  var c = a * b;
  return c;
};

console.log("Result is : " + multiply(a, b));
