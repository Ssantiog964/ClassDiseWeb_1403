import { validateString,validateTelefono } from "./validate.js";
import { addStudent, modalAlert } from "./paint.js";  
const btnEnviar=document.getElementById('btnEnviar'); 
btnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('lastName').value;
    const correo = document.getElementById('mail').value;
    const telefono = document.getElementById('telephone').value;
    const mensaje = document.getElementById('fm_contact').value;
    if(validateString(nombre) && validateString(apellido) && validateString(correo) && validateString(telefono) && validateString(mensaje)) 
    {
        if(!isNaN(parseInt(telefono))){
            addStudent(nombre,apellido,correo,telefono,mensaje);
        }else
        {
            modalAlert("Error revise el número de telefono")
        }
    }else{
        modalAlert("Error en los datos")
    }
    
});