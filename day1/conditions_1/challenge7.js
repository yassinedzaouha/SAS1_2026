//  Jour de la semaine

let prompt = require("prompt-sync")();
let num = Number(prompt("donner le numero de jour : "));
let day
switch (num) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
    default :
        console.log("Numéro invalide.")
}
if(day){
    console.log("le jour est : ",day)
}