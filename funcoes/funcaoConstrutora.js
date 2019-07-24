// isso e um objeto em javaScript

function Carro(velocidadeMax = 200, delta = 5){
    //atributo "privado"

    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if((velocidadeAtual + delta) <= velocidadeMax){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMax
        }
    }

    //metodo publico
    this.getVelocidadeAtual = () => velocidadeAtual
    
}

const uno = new Carro();
uno.acelerar();

console.log(uno.getVelocidadeAtual());

const ferrari =  new Carro(300, 20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())