let user = {
    name: 'Jacob',
    age: 1200,
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        if(hint == 'string' || hint == 'number') {
            return hint == 'string' ? `name: ${this.name}`: this.age;
        }
        return 1000;
    }
};
console.log(`${user}`)
console.log(user + 600)
console.log(++user)

/*let user = {
    name: 'Jacob'
}
console.log(user.toString())
console.log(user.valueOf() === user)*/

/*let user = {
    name: 'Jacob',
    age: 1200,
    toString() {
        return `{name: '${this.name}'}`
    },
    valueOf() {
        return this.age
    }
};

console.log(user)
console.log(+user)
console.log(user + 400)*/

