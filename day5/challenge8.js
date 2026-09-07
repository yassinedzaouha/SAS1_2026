function supprimerDoublons(tab){
    let val
    let newTab = []
    let bool = false
    for(let i=0; i<tab.length; i++){
        if(!newTab.includes(tab[i])) newTab.push(tab[i])
    }
    return newTab
}
console.log(supprimerDoublons([1, 2, 2, 3, 4, 4, 1]))