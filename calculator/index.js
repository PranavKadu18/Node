console.log("abstraction done");



const {sum} = require("./add") 
const {modulus} = require("./mod")
const {div} = require("./div")
const {sub} = require("./sub") 

module.exports = {sum,modulus,div,sub}