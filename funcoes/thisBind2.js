function Pessoa(){
    this.idade = 0
    this.nome = 'Tadeu'
    const self = this // escolho o this que quero usar no codigo quando usar no metodo

    setInterval(function(){
        //self.idade++
        console.log(self.idade++)
    }/*.bind(this)*/,1000)

}

new Pessoa;

