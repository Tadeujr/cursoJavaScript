//Revisao

//coleçao dinamica de chave e valor

const produto = new Object
produto.nome = 'cadeira'
produto['marcadoproduto'] = 'Generica'
produto.preco = 22

console.log (produto);

class Pessoa{
    

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        
    }

    setTel(tel){
        this.tel = tel
    }
    getNome(){
        return this.nome
    }
    getTel(){
        return this.tel
    }
    
}

teste = new Pessoa('Tadeu',29);

teste.setTel('3254-3321')

console.log(teste.getTel());