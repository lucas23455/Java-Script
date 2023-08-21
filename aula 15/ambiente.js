let num=[1,2,3,4,5,6,7,8,9,10]
//colocar a posiçao no vetor//
num[0]=11
// criar um novo vetor
num[10]=12
//outra forma de colocar o um novo vetor
num.push(13)
//inverter em ordem decrescente
num.sort()
//saber a quantidade de elementos no vetor
console.log(`o vetor tem ${num.length} posicoes`)
//mostrar todos os elementos digitados no vetor
console.log("-----------------------------------")
console.log(`nosso vetor é o: ${num}`)
//localizar o vetor
console.log(`-----------------------------------`)
console.log(`o primeiro vetor é ${num[0]}`) 
//localizar a posicao do numero do elemento
console.log(`-----------------------------------`)
let pos=num.indexOf(20)
if(pos==-1){
    console.log(`o valor nao foi encontrado`)
}else{
    console.log(`o valor esta na posiçao ${pos}`)
}

