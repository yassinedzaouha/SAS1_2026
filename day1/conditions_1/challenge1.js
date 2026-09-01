let prompt = require("prompt-sync")();
let age = prompt("enter your age : ");
if(age >= 18){
    console.log("authorized access");
}
else {
    console.log("refused access");
}