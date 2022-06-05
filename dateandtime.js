/*let now = new Date();
console.log(now)*/

/*let time = new Date(4*365*24*3600*1000)
console.log(time)*/

//let date = new Date ('01-03-1970')
//console.log(date)

//let date = new Date(2000, 9, 15, 23, 10, 5)
//console.log(date.getTimezoneOffset());

/*let now = new Date();
now.setSeconds(now.getSeconds() + 70)
console.log(now)*/

//let date = new Date()
//console.log(+date)

/*function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date1.getTime() - date2.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for(let i = 0; i < 100000; i++) {
        f(date1, date2);
    }
        return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

for(let i = 0; i < 10; i++) {
    time1 = time1 + bench(diffGetTime);
    time2 = time2 + bench(diffSubtract);
}

console.log(time1);
console.log(time2);*/

let date = new Date(2020, 0, 5)

function getLocalDay(date) {
    let day = date.getDay();
    if(day == 0) {
        day = 7;
    }
    return day;
}

console.log(date)