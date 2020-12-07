const add = (a, b) => a + b     // return a + b

console.log(add(5, 6))

// fonction getUser qui renvoi un utilisateur

const getUser = () => ({
    firstname: "John",
    lastname: "Doe",
})

console.log(getUser())

// Attention, une fonction fléchée garde toujours le contexte de départ (this)
// Une fonction classique peut changer de contexte



