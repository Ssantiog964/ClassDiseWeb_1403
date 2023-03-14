'use strict'
let msn="";
let option= prompt("Dame tu nota");
switch(true){       //Con true lo obligamos a que entre a switch    
    case option>=0 && option<3:
        //alert("Su nota es insuficiente");
        msn= `Su nota ${option} es deficiente`;
        alert(msn);
        break;    
    case option>=3 && option<=3.9:
        alert("Su nota es regular");
        break;
    case option>=4 && option<=4.5:
        alert("Su nota es sobresaliente");
        break;
    case option>=4.6 && option<=5:
        alert ("Su nota es excelente");
        break;
    default:
        alert("Nota inválida, no sea tan especial");
}

/* Un arreglo es un espacio de una variable
    */