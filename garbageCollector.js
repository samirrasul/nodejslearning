function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "Jacob"
}, {
    name: "Amalia"
})

console.log(family.mother.husband)
