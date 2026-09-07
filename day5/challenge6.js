function inverserTableau(tab){
    let newTab = []
    let j = 0
    for(let i=tab.length-1; i>=0; i--){
        newTab[j] = tab[i]
        j++
        console.log[newTab]
    }  
    return newTab
}
console.log(inverserTableau([1, 2, 3, 4]))