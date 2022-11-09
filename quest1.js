function verificaArray(x){
    if(Array.isArray(x)){
        console.log("É array");
    }
    else{
        console.log("Não é array");
    }
}

verificaArray([]);
verificaArray([1]);
verificaArray(['abacaxi', 15]);
verificaArray();
verificaArray({});
verificaArray(13);
verificaArray('Casa');
