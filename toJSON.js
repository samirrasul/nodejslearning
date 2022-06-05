/*let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
console.log(student)
let json = JSON.stringify(student);
console.log(typeof json);
console.log(json)*/

/*let user = {
    name: 'Jacob',
    age: 27,
    important: {
        hobbies: ['reading', 'music'],
        height: 1.83,
    }
};

let json = JSON.stringify(user);
console.log(json)*/

/*let sequence = '[1, 2, 3, 4]';
sequence = JSON.parse(sequence)
console.log(sequence[2])*/

/*let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str);
console.log(meetup)*/

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {
    if(key == "date") return new Date(value);
    return value;
});

console.log(meetup)
