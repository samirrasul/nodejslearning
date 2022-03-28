/*let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return {done: false, value: this.current++}
        } else {
            return {done: true};
        }
    }
};

for(let num of range) {
    console.log(num);
}*/

/*let range = {
    from: 0,
    to: 155,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if(this.current <= this.to) {
            return{ done: false, value: this.current++};
        } else {
            return{ done: true};
        }
    }
};*/

/*for(let num of range) {
    console.log(num);
}*/

/*for(let char of 'test') {
    console.log(char);
}*/
/*let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // outputs characters one by one
}*/
