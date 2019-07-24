const pessoa = {
    saudacao:   'ola',
    falar(){// outra forma de criar função 
        console.log(this.saudacao);
    }
}

pessoa.falar();
let falarDePessoa = pessoa.falar.bind(pessoa)// bind ammarra objeto ao metodo chamado
falarDePessoa()