let oceans = ["Pacific", "Atlantic", "Indian", "Artic", "Antarctic"]

console.log(oceans[0])

let sharks = ["Hammerhead", "Great White", "Tiger"]

let sharks3 = sharks 

let sharks2 = new Array("Hammerhead", "Great White", "Tiger")

// console.log(sharks.length)

// let lastIndex = sharks.length -1
// console.log(sharks[lastIndex])

sharks.push("Blue")

// console.log(sharks)

let shellfish = [
    "oyster",
    "shrimp",
    "clam",
    "mussel"
]

for (let i = 0; i < shellfish.length; i++){
    console.log(i + 1 , shellfish[i])
}

let mammals = [
    "dolphin",
    "whale",
    "manatee"
]

for (let mammal of mammals){
    console.log(mammal)
}
