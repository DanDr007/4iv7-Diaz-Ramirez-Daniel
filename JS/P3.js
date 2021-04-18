function Validar(){
    var patron= /^[A-Z]+$/
    v=true;
    var v=patron.test(document.querySelector("#c1").value);
    if(v==false){
        document.querySelector("#c1").value=""
        document.querySelector("#c1").value.focus;
        alert("Ingrese solo Letras MAyusculas");
    }
}
function I(){
var Text=document.querySelector("#c1").value;
var T=""
var N=Text.length
var z=false
var text=" "
for(x=0;x<N-1;x++){
    for(y=0;y<text.length;y++){
        if(Text[x]==text[y]){z=false
            break;}
        else {z=true}
        }
        text=text+Text[x]
        if(z==true){T=T+Text[x]+","}
    }
    for(y=0;y<text.length;y++){
        if(Text[N-1]==text[y]){z=false 
            break;}
        else {z=true}
        }
        text=text+Text[x]
        if(z==true){T=T+Text[x]}
    
    document.querySelector("#c2").value=T;
}