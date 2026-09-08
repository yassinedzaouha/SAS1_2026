let students = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Omar", age: 19 },
    { id: 4, name: "Imane", age: 21 }
];

function rechercherEtudiant(id){
    let obj;
    students.forEach((elem)=>{
        if(elem.id == id){
            obj = elem
        }
    })
    return obj 
}

console.log(rechercherEtudiant(3).name)