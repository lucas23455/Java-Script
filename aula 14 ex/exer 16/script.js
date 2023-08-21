function contar(){
  let ini= document.getElementById("txti")
  let fim = document.getElementById("txtf")
  let passo = document.getElementById("txtp")
  let res= document.getElementById("res")

  if(ini.value.length==0 || fim.value.length==0 || passo.value.length==0){
    window.alert("[erro] falta de dados!!")
  }else{
    res.innerHTML="contando: <br>"
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(i<f){ //crescente
        for(let c= i; c<=f; c+=p){
            res.innerHTML += `${c}\u{1f603}`
        }
        res.innerHTML +=`\u{1f3C1}`
    }else{ //decrecente
        for(let c=i; c >=f; c-=p){
            res.innerHTML += `${c} \u{1f609}`
        }
        res.innerHTML+=`\u{1f3C1}`
    }
  } 
}