function trierTableau(tab){
    let val
    for(let i=0; i<tab.length; i++){
        val = tab[i]
        for(let k=i+1;k<tab.length;k++){
            if(val < tab[k]){
                tab[i] = tab[k]
                tab[k] = val
               
            }
        }
    }
    return tab
}
console.log(trierTableau([5, 3, 1, 8, 2]))