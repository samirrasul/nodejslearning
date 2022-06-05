/*let arr = ['Jacob', 'Hossein'];
let [firstName, lastName] = arr;
console.log(firstName, lastName);*/
/*let [firstName, lastName] = 'Jacob Hossein'.split(' ');
console.log(firstName);*/
/*let user = {};
[user.name, user.surname] = 'Jacob Hossein'.split(' ');
console.log(user.name, user.surname);*/
/*let user = {
    name: 'Jacob',
    age: 27,
};
for ([key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`);
}*/
/*let user = new Map();
user.set('name', 'Jacob');
user.set('age', '27');
for([key, value] of user) {
    console.log(`${key}:${value}`);
}*/
/*let options = {
    title: 'Menu',
    width: 100,
    height: 200
};
let {title, width, height} = options;
console.log(title);*/

/*let name = 'Jacob';
let surname = 'Hossain';

[name, surname] = [surname, name];
console.log(`${name} ${surname}`);*/

/*let user = {
    size: {
        height: 1.83,
    },
    name: 'Jacob',
    age: 26,
    hobbies: ['reading', 'music'],
    extra: true
};

let {
    size: {
        height,
    },
    name = 'Hossain',
    age = 39,
    hobbies: [hobby1, hobby2],
    surname = 'Joseph'
} = user;
console.log(hobby2);*/

/*let options = {
    title: 'Jacob',
    items: ['item1', 'item2']
};

function showTitle({title = '', age = 33, surname = 'Hossain', items = []}) {
    console.log(`${title} ${age} ${surname}`);
    console.log(items);
}

showTitle(options)*/

/*let user = {
    name: 'John',
    years: 30
};

let {
    name,
    years: age,
    isAdmin = false
} = user;

console.log(isAdmin);*/

