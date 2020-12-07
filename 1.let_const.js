//pwd - print working directory dans Shell

// var et let

//"use strict"

;(function test(){
    // La portée de var est la fonction
    if (true){
        // La portée de let est le bloc { } (dans le if)
        var job ="dev"
        let prenom = "Fabio"
    }
    // console.log(job)
    // console.log(prenom)
})()

// const - la portée de const est celle du bloc { }
const pi = 3.14159
// pi = 3.1416 => je ne peut pas le faire
const animaux = ["chien", "chat"]
console.log(animaux)
animaux.pop()   // méthode qui supprime la dernière entrée du tableau
console.log(animaux)
animaux.push("cheval")  // méthode qui ajoute une entrée au tableau
console.log(animaux)

// On utilise toujours const.
// Si on a besoin de modifier la variable, alors on utilise let.





