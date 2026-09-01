let prompt = require("prompt-sync")();
let num1 = prompt("donner premier nombre : ")
let operation =  prompt("donner l'opiration : ")
let num2 = prompt("donner deuxieme nombre : ")
let result

switch (operation) {
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if(num2 == 0){
            console.log("la division a 0 est imposible")
            break;
        }
        result = num1 / num2;
        break;
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    default :
        console.log("Opérateur invalide")
        break;
}


if(result){
    console.log("resultat :" , result)
}