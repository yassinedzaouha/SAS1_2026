let prompt = require("prompt-sync")()
let num = prompt("donner numbre :")

let milles = num % 1000
let firstNum = (num - milles) / 1000
let centain = milles % 100
let secendNum = (milles - centain) / 100
let dizain = (centain % 10)
let thirdNum = (centain - dizain) / 10


console.log("first number ",firstNum)
console.log("secend number :",secendNum)
console.log("third number :",thirdNum)
console.log("fourth number :",dizain)
