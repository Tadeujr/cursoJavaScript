const anonimo = process.argv.indexOf('-a') !== -1

//console.log(anonimo)
if(anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}else{
    process.stdout.write("Fale seu nome: ")
    process.stdin.on('data',data =>{ // stdin entrada padrao 
        const nome = data.toString().replace('\n','')
        process.stdout.write(`Fala ${nome}!\n`)//stdout saida padrao
        process.exit()
    })

}