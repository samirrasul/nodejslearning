/*let user = {
    name: "Jacob"
};

user.sayHi = function () {
    console.log("Hello, World!")
};

user.sayHi()*/

/*user = {
    sayHi: function() {
       console.log("Hello, World!")
    }
};

user.sayHi()*/

/*user = {
    sayHi () {
        console.log("Hello, World!")
    }
}

user.sayHi()*/

/*user = {
    name: "Jacob",
    age: 1200,
    sayHi() {
        console.log(this.name)
    }
};

user.sayHi()*/

/*let user = {name: "Jacob"};
let admin = {name: "Amalia"};
function sayHi() {
    console.log(this.name)
};

user.f = sayHi;
admin.f = sayHi;

user.f()
admin.f()*/

/*let user = {
    name: "Jacob",
    sayHi() {
        let arr = () => console.log(this.name)
        arr()
    }
};
user.sayHi()*/

/*function makeUser() {
    return {
        name: "Jacob",
        ref: this
    };
}

user = makeUser()
console.log(user.ref.name)
console.log(makeUser().name)*/

/*let calculator = {
    a: 1,
    b: 2,
    sum () {
        return this.a + this.b
    },
    mul () {
        return this.a + this.b
    }
}

console.log(calculator.sum())*/

/*let ladder = {
    step: 0,
    up() {
        this.step++
    },
    down() {
        this.step--
    },
    showStep: function () {
        console.log(this.step)
    }

};
ladder.up()
ladder.up()
ladder.down()
ladder.showStep()*/

