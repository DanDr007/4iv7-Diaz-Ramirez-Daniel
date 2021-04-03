
function MenorOIgualA10(){
    var p1=parseInt(document.formulario.campo1.value);
    var p2=parseInt(document.formulario.campo2.value);
    var p3=parseInt(document.formulario.campo3.value);
    var exF=parseInt(document.formulario.campo4.value);
    var TF=parseInt(document.formulario.campo5.value);
    if(p1>10 | p2>10 | p3>10 | exF>10 | TF>10 ){
        document.formulario.campo1.value=""
        document.formulario.campo1.focus
        alert("Ingrese solo numeros en la escala del 1 al 10");}
}
function validarnumeros5(){
        
    var num=/[0-9\d .]/;
    v=true;
    v1=true;
    v2=true;
    v3=true;
    v4=true;
    var v=num.test(document.formulario.campo1.value);
    var v1=num.test(document.formulario.campo2.value);
    var v2=num.test(document.formulario.campo3.value);
    var v3=num.test(document.formulario.campo4.value)
    var v4=num.test(document.formulario.campo5.value)
    if(v==false){
        document.formulario.campo1.value=""
        document.formulario.campo1.focus
        alert("Ingrese solo numeros");
    }
    if(v1==false){
        document.formulario.campo2.value=""
        document.formulario.campo2.focus
        alert("Ingrese solo numeros");  
    }
    if(v2==false){
        document.formulario.campo3.value=""
        document.formulario.campo3.focus
        alert("Ingrese solo numeros");  
    }
    if(v3==false){
        document.formulario.campo4.value=""
        document.formulario.campo4.focus
        alert("Ingrese solo numeros");  
    }
    if(v4==false){
        document.formulario.campo5.value=""
        document.formulario.campo5.focus
        alert("Ingrese solo numeros");  
    } 
}
function validarnumeros4(){
    
    var num=/[0-9\d .]/;
    v=true;
    v1=true;
    v2=true;
    v3=true;
    var v=num.test(document.formulario.campo1.value);
    var v1=num.test(document.formulario.campo2.value);
    var v2=num.test(document.formulario.campo3.value);
    var v3=num.test(document.formulario.campo4.value)
    if(v==false){
        document.formulario.campo1.value=""
        document.formulario.campo1.focus
        alert("Ingrese solo numeros");
    }
    if(v1==false){
        document.formulario.campo2.value=""
        document.formulario.campo2.focus
        alert("Ingrese solo numeros");  
    }
    if(v2==false){
        document.formulario.campo3.value=""
        document.formulario.campo3.focus
        alert("Ingrese solo numeros");  
    }
    if(v3==false){
        document.formulario.campo4.value=""
        document.formulario.campo4.focus
        alert("Ingrese solo numeros");  
    }
} 
function validarnumeros3(){
    
    var num=/[0-9\d .]/;
    v=true;
    v1=true;
    v2=true;

    var v=num.test(document.formulario.campo1.value);
    var v1=num.test(document.formulario.campo2.value);
    var v2=num.test(document.formulario.campo3.value);
    if(v==false){
        document.formulario.campo1.value=""
        document.formulario.campo1.focus
        alert("Ingrese solo numeros");
    }
    if(v1==false){
        document.formulario.campo2.value=""
        document.formulario.campo2.focus
        alert("Ingrese solo numeros");  
    }
    if(v2==false){
        document.formulario.campo3.value=""
        document.formulario.campo3.focus
        alert("Ingrese solo numeros");  
    }
} 
function validarnumeros2(){
    var num=/[0-9\d .]/;
    v=true;
    v1=true;
    var v=num.test(document.formulario.campo1.value);
    var v1=num.test(document.formulario.campo2.value);
    if(v==false){
        document.formulario.campo1.value=""
        document.formulario.campo1.focus
        alert("Ingrese solo numeros");
    }
    if(v1==false){
        document.formulario.campo2.value=""
        document.formulario.campo2.focus
        alert("Ingrese solo numeros");  
    }
}
function validarnumeros1(){
    v=true;
    var num=/[0-9\d .]/;
    var v=num.test(document.formulario.campo1.value);
    if(v==false){
        document.formulario.campo1.value=""
        document.formulario.campo1.focus
        alert("Ingrese solo numeros");
    }
}
function calcBanco(){
    var dinero=parseInt(document.formulario.campo1.value);
    var df=dinero + dinero*.02;
    console.log(df)
    document.formulario.campoF.value=df;
}
function ganancias(){
    var SB=parseInt(document.formulario.campo1.value);
    var V1=parseInt(document.formulario.campo2.value);
    var V2=parseInt(document.formulario.campo3.value);
    var V3=parseInt(document.formulario.campo4.value);
    var ganancia=SB+V1*.1+V2*.1+V3*.1;
    document.formulario.campoF.value=ganancia;
}

function compra(){
    var dinero=parseInt(document.formulario.campo1.value);
    var df=dinero - dinero*.15;
    console.log(df)
    document.formulario.campoF.value=df;
    return 0;
}
function calificaciones(){
    var p1=parseInt(document.formulario.campo1.value);
    var p2=parseInt(document.formulario.campo2.value);
    var p3=parseInt(document.formulario.campo3.value);
    var exF=parseInt(document.formulario.campo4.value);
    var TF=parseInt(document.formulario.campo5.value);
    var promedio=(p1+p2+p3)/3;
    var CF=promedio*.55+exF*.3+TF*.15
    document.formulario.campoF.value=CF;
}
function promedioNiños(){
    var ninioz=parseInt(document.formulario.campo1.value);
    var niniaz=parseInt(document.formulario.campo2.value);
    var niños=ninioz+niniaz;
    var PM=(ninioz/niños)*100
    var PH=(niniaz/niños)*100
    document.formulario.campoF.value=("Porcentaje de niños :"+PM+"% Porcentaje de niñas :"+ PH+"%")
}
function edad(){
x=parseInt(document.formulario.campo1.value)
edad=2021-x;
document.formulario.campoF.value=edad;
}
function dosnumeros(){
    var n1=parseInt(document.formulario.campo1.value);
    var n2=parseInt(document.formulario.campo2.value);
    if(n1===n2)R=n1*n2;
    else{
        if(n1>n2)R=n1-n2;
        else R=n1+n2;
    }
    
    document.formulario.campoF.value=R 
}
function elMayorDe3Numeros(){
    var n1=parseInt(document.formulario.campo1.value);
    var n2=parseInt(document.formulario.campo2.value);
    var n3=parseInt(document.formulario.campo3.value);
    if(n1 > n2){
        document.formulario.campoF.value=n1;
    }

    if(n2>n1){
        document.formulario.campoF.value=n2;

    }

    if(n3>n1 & n3>n2){
        document.formulario.campoF.value=n3;
    }
}
function horasExtras(){
    var horas=document.formulario.campo1.value;
    if(horas<9)document.formulario.campoF.value=horas*10;
    else{
        if (horas<0)alert("No se aceptan horas negativas");
        else{
            horasExtras=horas-8
            dinero=160+ horasExtras*30
            document.formulario.campoF.value=dinero
        }
    }
}
function utilidadEmpresa(){
    var años=parseFloat(document.formulario.campo1.value);
    var sueldo=parseFloat(document.formulario.campo2.value);
    if(años<1){
        var utilidad=sueldo*0.05;
        document.formulario.campoF.value=utilidad;
    }

    if(años>=1 & años<=2)
    {
        var utilidad=sueldo*0.07;
        document.formulario.campoF.value=utilidad;
    }

    if(años>=2 & años<5)
    {
        var utilidad=sueldo*0.10;
        document.formulario.campoF.value=utilidad;
    }

    if(años>=5 & años<10)
    {   
        var utilidad=sueldo*0.15;
        document.formulario.campoF.value=utilidad;
    }

    if(años>10)
    {
        var utilidad=sueldo*0.20;
        document.formulario.campoF.value=utilidad;
    }
    if(años<0)alert("no se aceptan numeros negativos")
}