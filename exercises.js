/*
function area(a,b,c) {
    perimeter = (a + b + c)/2;
    result = (perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c)) ^ 0.5
    console.log (result);
}

area(5,6,7);
*/

/*
function randomNumber(min, max) {
    result = Math.random() * (max - min) + min;
}

let a = randomNumber(1, 10), b = 7;

if(b == a) {
    console.log("Good Work");
} else if (b > a) {
    console.log ("It is too higher");
} else {
    console.log ("It is too lower");
}
*/

/*
function diff(b) {
    if (b > 13) {
        result = 2 * (b - 13);
    } else {
        result = 13 - b;
    }
    console.log(result);
}

diff(13);
*/

/*
function sumif(a, b) {
    if (a == b) {
        result = 3 * (a + b);
    } else {
        result = a + b;
    }
    console.log (result);
}

sumif(5,5);
*/

/*
function check(a, b) {
    if (a == 50 || b == 50 || a + b == 50) {
        console.log(true);
    } else {
        console.log(false);
    }
}

check(45, 5);
*/

function checkhundred(a) {
    if (Math.abs(100 - a) <= 20 || Math.abs(400 - a) <= 20) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkhundred(199);