
// nao ta na aula e so um teste essa classa

class Carro{
    constructor(modelo, velMax){
        this.modelo = modelo;
        this.velMax = velMax
    }

    mostrarModelo(){
        console.log(this.modelo)
    }
}

const fiat = new Carro("uno", 150)
fiat.mostrarModelo()

console.log(fiat.__proto__) // .__proto__ mostra o prototipo pai aqui vai mostra objeto vazio {}
console.log(fiat.__proto__ === Object.prototype)//mostrando que aponta para o prototipo padrao o js
console.log(fiat.__proto__ === Object.prototype)


const ferrari = {
    modelo:'F40',
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 200
}


console.log(ferrari.__proto__) // .__proto__ mostra o prototipo pai aqui vai mostra objeto vazio {}
console.log(ferrari.__proto__ === Object.prototype)//mostrando que aponta para o prototipo padrao o js
console.log(volvo.__proto__ === Object.prototype)// iguala  linha anterior 

