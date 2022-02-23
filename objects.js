let user = {
    name: "John",
    age: 30,
    "like birds": true
};

console.log(user["like birds"])
console.log(user.name)

let key = "like birds"
console.log(user[key])

for (let a in user) {
    console.log(a)
    console.log(user[a])
}