const prompt = require("prompt-sync")()
let N = Number(prompt("donner le nombre de missions  :"))

let i = 1;
let score = 0
while(i <= N){
    console.log("mission",i,"-> Score :",score+=100)
    i++;
}