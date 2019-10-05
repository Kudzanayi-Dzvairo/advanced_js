// forEach
let users = [
    {
    id:1,
    name: "king"
    },
    {
    id:2,
    name: "john"
    },
    {
    id:3,
    name: "gowtham"
    }
]

users.forEach(user => console.log(user.id, user.name))

for(let user of users){
    console.log(user.id, user.name)
}

