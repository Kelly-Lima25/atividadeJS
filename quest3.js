function retornaNvalores(vetor, n){
    for(i=0;i<=n-1;i++){
        console.log([i+1] + "º vetor: " + vetor[i]);
    }   
}

let vetor = ['abacaxi', 13, "casa", 50.7, false];

retornaNvalores(vetor, 3);