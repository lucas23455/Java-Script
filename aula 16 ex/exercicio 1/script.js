let num =document.getElementById("fnum")
let lista=document.getElementById("flista")
let res= document.getElementById("res")
let valores=[]

function isNumero(n){
    if(Number(n)>= 1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n))!=-1){
       return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value)&& !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text=`valor ${num.value} colocado`
        lista.appendChild(item)
        res.innerHTML=""
    }else{
        window.alert("valor invalido ou ja encontrado na lista")
    }
    //pra limpar a barra de escrever
    num.value=""
    num.focus()
}
function finalizar(){
    if(valores.length==0){
        window.alert("adicione valores antes de finalizar")
    }else{
       let tot= valores.length
       let maior=valores[0]
       let menor=valores[0]
       let soma=0
       let media=0
       for(let pos in valores){
        soma+= valores[pos]
        if(valores[pos]>maior)
           maior=valores[pos]
        if(valores[pos]<menor)
        menor=valores[pos]   
       }
       media=soma/tot  
       res.innerHTML=""
       res.innerHTML+=`<p>ao todo, temos ${tot} numeros cadastrados</p>`
       res.innerHTML+=`<p>maior valor informado foi ${maior}</p>`
       res.innerHTML+=`<p>menor valor informado foi ${menor}</p>`
       res.innerHTML+=`<p>a soma total será ${soma}</p>`
       res.innerHTML+=`<p>a media total será ${media}</p>`
    }
}