function showMessage() {
    let username = "Jim"
    let message = "Hello " + username
    console.log(message)
}

showMessage()

function showMessage(from, text) {
    console.log(from + ":" + text)
}

showMessage("Jake", "Hi, dear" )

function sum(a, b) {
    return a+b;
}

let result
result = sum(3,7)
console.log(result)

function age(a) {
    if(age>=18) {
        return true;
    }
    else {
        return false;
    }
}
let a=19
if (age) {
    console.log("Access granted")
} else {
    console.log("Access denied")
}

function min(a, b) {
    if( a> b) {
        return a;
    } else {
        return b;
    }
}

let couple = min(57,98)
console.log(couple)

function pow(a,n) {
    let result = a;
    for (let i = 1; i < n; i++) {
        result = result * a;
    }
    return result;
}

let m = pow(2,10);
console.log(m);
