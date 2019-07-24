const sequencia = {
    _valor:1, // conversão para progra adores de acesso dentro do objeto
    
    get valor(){return this._valor++;},
    set valor(valor){
        if(valor > this.valor){
            this._valor = valor; 
            }
        }
}


sequencia._valor(1000) // erro atributo privado
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);