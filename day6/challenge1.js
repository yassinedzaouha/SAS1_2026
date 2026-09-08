let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};

function salaireFinal(obj){
    let penalite = obj.absenceDays * 200;
    return obj.salary + obj.bonus - penalite
}

console.log("salaire final est :",salaireFinal(employee))