//Clousure é o escolpo criado quando a unção e declarada
// Esse escopo permite e a funçãp acessar e manipular as variaveis externas fora da função

//Exemplo
const x = 'Global';

function fora(){
    const x = 'Local';
    function dentro (){
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();

console.log(minhaFuncao());