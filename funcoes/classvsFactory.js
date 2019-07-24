class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p1 = new Pessoa("Tadeu")
p1.falar()

const criarPessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}.`)
    }
}

const p2 = criarPessoa('Lucas')
p2.falar()

// função contrutora
function PessoaF(nome){
    this.nome = nome
     
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}.`)
    }

}

const p3 = new PessoaF("Magno")
p3.falar()