function concatenandoArrayemString(vetor, palavra){
    var palavra =  palavra +"," + vetor.toString();
    console.log(palavra);
}
let vetor1 = ['dev','JS', 'Python', 5.8];
let palavra = 'abril';
concatenandoArrayemString(vetor1, palavra);