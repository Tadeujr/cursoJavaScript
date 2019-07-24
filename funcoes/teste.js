// função factory
function criarAnimal(nome, especie){ // parece com uma classe 
    return{
        nome,
        especie,
        getMsg(){
            return `${nome} é um ${especie}`
        }
    }
}

const novoAnimal = criarAnimal('Negão','Cachorro');

console.log(novoAnimal.getMsg());

