/*function sayHi() {
    console.log("Hi");

    sayHi.counter++;
}
sayHi.counter = 0;
sayHi();
sayHi();
console.log(sayHi.counter)*/

/*function makeCounter() {
    counter.count = 0;
    function counter () {
        return counter.count++;
    }
    return counter;
}

counter = makeCounter();
console.log(counter());*/

function sayHi(who) {
    if(who) {
        console.log(`Hello, ${who}`);
    } else {
        sayHi("Guest");
    }
}

sayHi("Jacob");