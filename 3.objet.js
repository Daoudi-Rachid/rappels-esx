const character = {
    id: 0,
    firstname: "John",
    lastname: "Snow",
    lives: {
        city: "Winterfell",
    },
}

const character2 = {
    id: 1,
    firstname: "Edward",
    lastname: "Stark",
    lives: {
        city: "Winterfell",
    },
    isAlive: false
}

// const firstname = character.firstname
// const lastname = character.lastname
// const id = character.id
// const city = character.lives.city
// => On peut la même chose en une seule ligne, avec la destructuration
const {id, firstname: prenom, lastname: nom, lives: {city: ville}, isAlive = true} = character
console.log(id, prenom, nom, ville, isAlive)
const {id: id2, firstname: fn2, lastname: ls2, lives: {city: city2}, isAlive: iA2} = character2
console.log(id2, fn2, ls2, city2, iA2)

// Function default parameter

// Dynamic key - permet de mettre un nom de clé variable dans un objet
const dynamicKey = "surname"
const tyrion = {
    id: 2,
    firstname: "Tyrion",
    lastname: "Lannister",
    [dynamicKey]: "himp",
    lives: {
        city: "Kings Landing",
    },
}

// console.log(tyrion)

// Copier un objet rapidement - Spread operator
const gender = "male"
const tyrion2 = {
    ...tyrion,  // ... permet de copier tyrion
    lives: {
        city: "Meereen",
    },
    gender: gender,     // on peut ecrire   gender   tout court à la place
}

// console.log(tyrion2)

// Fonction default paramter
const sayHello = (name = "my lord") => {
    // Template literals - string interpolation
    console.log(`Hello ${name.toUpperCase()}`)
}

sayHello("Fabio")
sayHello()

// Rest Operator
const add = (...params) => {
    let total = 0
    for (const n of params) {
        total += n
    }
    console.log(total)
}

add(5, 6)
add(1, 4, 3)
add()

// github.com
// $ git init
// $ git add 1.let_const.js







