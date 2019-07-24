// Cadeia de proótipo(prototype chain)
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}// passando herença de avo
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1);// pegando o atributo do avo

const Carro = {
    velAtual: 0,
    velMax : 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo:'F40',
    velMax: 324// vai sobrescrever o da classe shadowing
}

const volvo = {
    modelo: "V40",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, Carro)// estou setando ferraro tendo carro como prototipo

Object.setPrototypeOf(volvo, Carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())