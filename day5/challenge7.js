function filtrerPairs(tab){
    let newTab = [];
    for(let i=0; i<tab.length; i++){
        if(tab[i] % 2 == 0){
            newTab[newTab.length] = tab[i];
        }
    }
    return newTab
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6]))