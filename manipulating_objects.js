var person = {
    name: "kudzanayi",
    age:31,
    gender: "male",
    runner: "true"
}

function Person(name, age, gender, runner) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.runner = runner ;
}

var todd = new Person("todd", 32, "male", "true")
var joe = new Person("joe", 21, "male", false)
var julia = new Person("julia", 29, "female", true)

var malcolm = new Person(23, 'Malcolm')
var jay = new Person('Jay', 55, 'male', false, 'extraArgument')

malcolm.name = "Malcolm"
malcolm.age = 23 
malcolm.gender = 'trans'
malcolm.runner = true

// console.log(malcolm)

function Cat(name, livesLeft, speak){
    this.name = name; 
    this.livesLeft = livesLeft || 9;
    this.speak= speak || 'snarf'
}

var kitty = new Cat('lilly')
// console.log(kitty.livesLeft)

const objectLiteral = {}

const objectConstructor = new Object()

console.log(objectConstructor)

const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: 'axe',
    greet: function(){
        return `Hi, my name is ${this.name}!`
    },
}

gimli["age"] = 139

gimli["fight"] = function(){
    return `Gimli attacks with an ${this.weapon}.`
}

gimli.weapon = 'battle axe'
// console.log(gimli)

//iterate through keys/properties
// for(let key in gimli){
//     console.log(gimli[key])
// }

//get keys and values of gimli properties
// for(let key in gimli) {
//     console.log(key.toUpperCase() + ':' + gimli[key]);
// }

console.log(Object.entries(gimli))