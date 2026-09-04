function invertNum(num){
    let rest = 0
    let revers = 0
    while(num != 0){
        rest = num % 10;
        revers = revers*10 + rest;
        num = (num - rest) / 10;
    }
    return revers
}

const prompt = require("prompt-sync")();

let num = prompt("donner un number :");

invertNum(num) == num ? console.log(num,"->palindrome"):console.log(num,"->pas palindrome")