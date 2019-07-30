function falarDepoisDe(segundos,frase){
    if(!segundos || !frase){
        
        return new Promise((resolve,reject) => {//resolve resolver a promessa e rejetct rejeita
            setTimeout(()=>{
                reject("Deu Erro Manolo")
            },segundos*1000)
        })

    }else{
        return new Promise((resolve,reject) => {//resolve resolver a promessa e rejetct rejeita
            setTimeout(()=>{
                resolve(frase)
            },segundos*1000)
        })
    }

}

falarDepoisDe().then(frase => frase.concat('?!?')).
then(outraFrase=>console.log(outraFrase)).catch(e=>console.log(e))