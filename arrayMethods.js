/*let arr = ['I', 'will', 'learn', 'Javascript'];
arr.splice(0, 2, 'You', 'should');
console.log(arr)
console.log(arr.splice(0,2));*/
/*let arr = [12, 9.8];
arr = arr.concat([93, 23], [1200, 98]);
console.log(arr);*/

/*['Jacob', 'Amalia', 'Hossein'].forEach(function (item, index, array) {
    console.log(`${item} is found at ${index} in ${array}`)
})*/

/*let user = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jacob'},
    {id: 3, name: 'Hossein'}
]
let users = user.find(item => item.id == 2)
console.log(users)
let someUser = user.filter(item => item.id < 3)
someUser.forEach(function item(item) {
    console.log(item.name)
})*/

/*function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a == b) return 0;
}

let arr = [ 1, 83, 34];
console.log(arr.sort(compareNumeric));
console.log(arr.map(item => item.length))*/

/*let names = 'Jacob, Hossein, Amalia';
let arr = names.split(', ');
for (let name of arr) {
    console.log(`${name} is absent`);
}
let other = names.split(', ', 2)
console.log(other)*/

/*let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result)*/

/*let user = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        if (user.age >= this.minAge && user.age <= this.maxAge) return user.age;
    }
};
let users = [
    {age: 16},
    {age: 99},
    {age: 23},
    {age: 19}
]
let soldiers = users.filter(user.canJoin, user);
console.log(soldiers)*/

/*function camelize (str) {
    let splitted = str.split('-');
    let index = 0;
    let capitalized = splitted.map(
        //(word => index == 0 ? word : word[0].toUpperCase() + word.slice(1)));
        function cap(word) {
            if(index != 0) {
                 word = word[0].toUpperCase() + word.slice(1);
            }
            index++;
            return word;
            }
    )
    let joined = capitalized.join('');
    console.log(joined)
}
camelize('russia-ukrainian-war')*/

/*function filterRange(arr, a, b) {
    let gop = arr.filter(number => number >= a && number <= b);
    console.log(gop);
}
let go = [1, 2, 4, 5, 9];
filterRange(go, 0, 5);
console.log(go)*/

/*function filterRangeInPlace (arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
go = [1, 45, 23, 22, 0];
filterRangeInPlace(go, 1, 23);
console.log(go);*/
