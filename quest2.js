function clonarArray(vetor1, vetor2){
    return vetor1.copyWithin()
}

let array1 = ['bazinga','bazinga', 25, 'Vasco']
let array2 = []

console.log(array1)
console.log(array2)

array2 = clonarArray(array1, array2)

console.log(array2)