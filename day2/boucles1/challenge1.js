const prompt = require("prompt-sync")()
let nombreP = Number(prompt("donner le nombre de participants :"))
for(let i = 1; i <= nombreP; i++){
    console.log("Participant ",i);
}
 