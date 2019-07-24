const obj = {a:1, b:2, c:3,soma(){ return a+b+c}}

//convertendo um objeto pra JSON, lembrando que ele nao pega os metodos do objeto
console.log(JSON.stringify(obj))
const saida = JSON.stringify(obj);
console.log(saida)
//tranformando em um JSON em Objeto
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))