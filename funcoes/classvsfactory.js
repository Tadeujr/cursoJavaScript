class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    fala(){//metodo
        console.log(`meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Tadeu');
p1.fala();
