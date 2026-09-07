function contientElement(tab, valeur){
    for(let i=0; tab.length;i++){
        if(tab[i] == valeur){
            return true
        }
    }
    return false
}

console.log(contientElement(["banan","coco","apple"],"apple"))