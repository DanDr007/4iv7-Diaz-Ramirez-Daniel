function cuadrado(){
    var l=document.querySelector("#n1").value;
    var A=l*l
    document.querySelector("#R").value=A;
}
function rectangulo(){
    var b=document.querySelector("#n1").value;
    var h=document.querySelector("#n2").value;
    var A=b*h
    document.querySelector("#R").value=A;
}
function triangulo(){
    var b=document.querySelector("#n1").value;
    var h=document.querySelector("#n2").value;
    var A=(b*h)/2
    document.querySelector("#R").value=A;
}