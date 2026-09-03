function additionnerTout(...args){
    let somme = 0
    for(let i=0; i<args.length; i++){
        somme += args[i]
    }
    return somme;
}

console.log(additionnerTout(10,10,10,10,10,10,10))