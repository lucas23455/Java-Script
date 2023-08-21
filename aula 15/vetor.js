let valores=[1,2,3,4,5,6,7,8,9,10]

//uma maneira de aparecer na tela
console.log(valores)
valores.sort()

//maneira burra
/*console.log(valores[0])*/
/*console.log(valores[1])*/
/*console.log(valores[2])*/
/*console.log(valores[3])*/
/*console.log(valores[4])*/
/*console.log(valores[5])*/
/*console.log(valores[6])*/

/*for(let pos=0;pos<valores.length;pos++){
    console.log(`a posiçao ${pos} tem valor ${valores[pos]}`)

}
*/
//maneira mais simplificadada

for(let pos in valores){
    console.log(`a posiçao ${pos} tem valor ${valores[pos]}`)
   
}
