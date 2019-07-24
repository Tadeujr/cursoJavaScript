const aprovados = ["Agatha","Aldo","Daniel","Raquel"]

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1} - ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
function imprime(vet){
    console.log("\n Funcao Imprimir")  
    for(i = 0; i < vet.length ; i++){
          
        console.log(vet[i])
    }
}

imprime(aprovados)