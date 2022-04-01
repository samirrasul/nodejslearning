/*function sumSalaries(salaries) {
    let sum = 0;
    for(let value of Object.values(salaries)) {
        sum = sum + value;
    }
    console.log(sum);
}
let salaries = {
    'John': 100,
    'Jacob': 200,
    'Hossein': 650,
};
sumSalaries(salaries);*/

function count(user) {
    let count = 0;
    for(let key in Object.keys(user)) {
        count++;
    }
    console.log(count);
}

let user = {
    name: 'John',
    age: 32
};

count(user)


