let amigo={nome:"jose",
sexo:"M",
engorda(p=0){
    console.log("engordar")
    this.peso+=p
}}
amigo.engorda(2)
console.log(`${amigo.peso} pesa ${amigo.peso}Kg`)