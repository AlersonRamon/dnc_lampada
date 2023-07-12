 var divLampada = window.document.getElementById("lampada")
 console.log(divLampada.src)

 function trocaLampada(res){
    if(!divLampada.src.includes('images/quebrada')){
        divLampada.src = `images/${res}`
    }else{
        alert(">>>>>>>>>>LÂMPADA QUEBRADA<<<<<<<<<<<<")
    }
    
 }

