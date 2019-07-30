//
for(let letra of 'Cod3r'){
    console.log(letra)
}
const animais = ['Gato','Macaco','Coelho']

// for normal
for(let i in animais){
    console.log(animais[i])
}

console.log("\nFor com of\n")
for(let animal of animais.keys()){// adicionie keys para ver as posiçoes serve para objetoo tb
    console.log(animal)
}

for(let[pos,animal] of animais.entries()){
    console.log(pos,":",animal)
}