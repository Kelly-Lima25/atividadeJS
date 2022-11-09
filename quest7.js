
function ItemMaisFrequente(vetor){
    let qtdItem = 0, itemRepetido, aux, aux2;
    for(aux = 0; aux < vetor.length; aux++){
        for(aux2 = 0; aux2 < vetor.length; aux2++){
            if(vetor[aux] == vetor[aux2]){
                qtdItem++;
                itemRepetido = vetor[aux2];
            }
        }
        
    }
    return itemRepetido;
}
let vetor = [11, 5, 7, 7, 13, 8, 9, 8, 3, 11, 8, 3 , 8, 7,15, 7, 89, 7];
console.log(ItemMaisFrequente(vetor));
