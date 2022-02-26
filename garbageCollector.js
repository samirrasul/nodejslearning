function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
    return {
        father: man,
        mother: woman
    }
}

a = {
    name: "Jacob",
    age: 1200,
    nationality: "Azeri"
}
a.age = 1300
a = Object.assign(a, {nationality: "Jew"})
console.log(a)
/*let family = marry({
    name: "Jacob"
}, {
    name: "Amalia"
})

console.log(family.mother.husband)*/
