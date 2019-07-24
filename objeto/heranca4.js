function MeuObjeto(){}// função objeto

console.log(MeuObjeto.prototype)
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = "Jubuleu"
obj2.falar()