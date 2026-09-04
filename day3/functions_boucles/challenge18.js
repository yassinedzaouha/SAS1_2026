function invertNum(num){
    let rest = 0
    let revers = 0
    while(num != 0){
        rest = num % 10;
        revers = revers*10 + rest;
        num = (num - rest) / 10;
    }
    return revers
}


console.log(invertNum(1234))