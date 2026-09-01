let prompt = require("prompt-sync")();
let note = Number(prompt("donner votre note : "))
let mention
if(note < 10){
    mention = "echec"
}
else if(10 <= note && note < 12){
    mention = "passable"
}
else if(12 <= note && note < 14){
    mention = "assez bien"
}
else if(14 <= note && note < 16){
    mention = "bien"
}
else if(16 <= note && note < 18){
    mention = "tres bien"
}
else if(18 <= note && note <= 20){
    mention = "excellent"
}

console.log("montion : " + mention )