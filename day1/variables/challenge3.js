let prompt = require("prompt-sync")();
let GB = prompt("donner le stockage on GB: ")
let MB = GB * 1024;
console.log("stockage :",GB,"GB");
console.log("stockage :",MB,"MB");