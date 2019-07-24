class Avo{
    
    constructor(sobrenome){
        this.nome = sobrenome
    }
}

class Pai extends Avo{
    constructor (sobrenome, profissao = "professor"){
        super(sobrenome)// fazendo a classe pai receer para o construto
        this.profissao = profissao

    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho()
console.log(filho)