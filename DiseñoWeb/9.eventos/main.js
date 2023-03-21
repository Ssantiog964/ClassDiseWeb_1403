//propiedad del elemento HTML
function saliendo(){
    console.log("Evento generado por el mouse");
}

//Método mediante propiedades
const sec1Propiedad = document.getElementById('sec1');

sec1Propiedad.onclick = function () {
    alert("click en el section");
}
//Mediante el método .addEventListener

const btn = document.querySelector('#btnEnviar');
btn.addEventListener('click', ()=>{
    alert("click con addEvent.......")
} );