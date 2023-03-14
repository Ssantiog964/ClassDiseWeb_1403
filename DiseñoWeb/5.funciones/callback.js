let mensaje = "hola";
//función como expresión
const saludo = function(cad){
    console.log(cad + "estudiantes");
    console.log(`${cad} estudiantes UE`);
}

//callback
function saludar(callback,msn){
    callback(msn);
}
//invocar el callback
saludar(saludo,mensaje);