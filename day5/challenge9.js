function fusionnerTableaux(tab1, tab2){
    for(let i=0;i<tab2.length; i++){
        tab1.push(tab2[i])
    }
    return tab1
}

console.log(fusionnerTableaux([1, 2], [3, 4]))  