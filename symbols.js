/*let id = Symbol('id')
console.log(id.toString())
console.log(id.description)
console.log(id)*/

/*let user = {
    name: 'Jacob'
};

let id = Symbol('id')
user[id]= 1
console.log(user[id])*/

/*let id = Symbol('id')
let user = {
    name: 'Jacob',
    age: 1200,
    [id]: 123
};
for (let key in user) {
    console.log(user[key])
}
console.log(user[id])
let clone = Object.assign({}, user)
console.log(clone[id])*/

/*let id = Symbol.for('id')
let idAgain = Symbol.for('id')
console.log(id === idAgain)*/

/*let smb1 = Symbol.for('id')
let smb2 = Symbol.for('name')
console.log(Symbol.keyFor(smb1))
console.log(Symbol.keyFor(smb2))*/