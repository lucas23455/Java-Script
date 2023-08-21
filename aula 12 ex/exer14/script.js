function carregar(){
var msg=window.document.getElementById("msg") 
var img=window.document.getElementById("imagem")
var data= new Date()
//var hora=data.getHours()
var hora= 9

msg.innerHTML=`agora sao ${hora}horas`
if(hora >=0 && hora <12){
    //bom dia
    img.src=`imagens/manha.jfif`
    document.body.style.background="red"
} else if(hora >12 && hora <=18){
    // boa tarde
    img.src=`imagens/tarde.png`
    document.body.style.background="green"
}else{
    //boa noite
    img.src=`imagens/noite.jfif`
    document.body.style.background="blue"
}
  
}
