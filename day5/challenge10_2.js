function trierTableau(tab){
    let val
    let bool = true;
    while(bool){
        bool = false
        for(let i=0; i<tab.length; i++){
            if(tab[i] < tab[i+1]){
                val = tab[i]
                tab[i] = tab[i+1]
                tab[i+1] = val
                bool = true1
            }
        }
    }
    return tab  
}
console.log(trierTableau([5, 3, 1, 8, 2]))