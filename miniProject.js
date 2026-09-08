let employers = [
  {name:"yassine", age:30, salaire:20000, fonction:"formateur"},
  {name:"amin", age:27, salaire:30000, fonction:"CME"},
]

function affichage(){
  for(let i=0; i<employers.length; i++){
    console.log(employers[i].name)
  }
}
// affichage()

function affichageByFunction(func){
  for(let i=0; i<employers.length; i++){
    if(employers[i].fonction == func){
      console.log(employers[i].name)
    }
  }
}

// affichageByFunction("formateur")

function moyenneAgeParFunction(func){
  let somme = 0
  let compt = 0
  for(let i=0; i<employers.length; i++){
    if(employers[i].fonction == func){
      somme += employers[i].age
      compt++
    }
  }
  return (somme / compt)
}

// console.log(moyenneAgeParFunction("formateur"))

function maxSalaire(){
  let obj =employers[0]
  let max = employers[0].salaire
  for(let empl of employers){
    if(max < empl.salaire){
      max = empl.salaire
      obj = empl
    }
  }
  return [obj.name, obj.age, obj.salaire]
}

// console.log(maxSalaire())

function triParAge(){
  let val
  for(let i=0; i<employers.length;i++){
    for(let j=0; j<employers.length-i-1;j++){
      if(employers[j].age > employers[j+1].age){
        val = employers[j]
        employers[j] = employers[j+1]
        employers[j+1] = val
      }
    }
  }
}

triParAge()
console.log(employers)

function triParAge(){
  let val
  for(let i=0; i<employers.length;i++){
    for(let j=0; j<employers.length-i-1;j++){
      if(employers[j].salaire > employers[j+1].salaire){
        val = employers[j]
        employers[j] = employers[j+1]
        employers[j+1] = val
      }
    }
  }
}

triParAge()
console.log(employers)


function searchByname(name){
  
  for(let emp of employers){
    if(emp.name == name){
      return emp
    }
  }
}
console.log(searchByname("yassine"))









