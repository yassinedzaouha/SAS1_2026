let prompt = require("prompt-sync")();
let score1 = prompt("donner score partie 1: ")
let score2 = Number(prompt("donner score partie 2: "))
let score3 = Number(prompt("donner score partie 3: "))
let score4 = Number(prompt("donner score partie 4: "))
let scoreTotal = score1 + score2 + score3 + score4 ;
let moyenne = scoreTotal / 4;
console.log("score total : ", scoreTotal);
console.log("moyenne : ", moyenne);