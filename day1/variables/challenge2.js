const prompt = require("prompt-sync")();
const MAD = prompt("donner un mantant MAD: ");
let EUR = Number(MAD) / 11;
console.log("Budget en MAD : ", MAD)
console.log("Budget en EUR : ", EUR)