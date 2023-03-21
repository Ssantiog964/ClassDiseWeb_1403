const cardsEstudiantes = document.querySelector("#cardsEstudiantes");

const addStudent = (name, lastName, mail, tele, msn) =>{
    let person = {
        pname: name,
        plastName: lastName,
        pmail: mail,
        ptele: tele,
        pmsn: msn
    }
    let text = `¿Estas segur@ ${person.pname} ${person.plastName} de enviar la petición`;
    modalAlert(text,"aceptar", person);
}

function modalAlert(cadena, tipo, persona){
    const alerta = document.createElement("div");
    const text0 = document.createElement("p");
    const btnCerrar = document.createElement("input");
    alerta.setAttribute("id", "alerta");
    alerta.setAttribute("class", "alerta");
    text0.setAttribute("class", "textAlerta");
    text0.innerHTML = `<strong>${cadena}</strong>`;
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "Cerrar");
    alerta.appendChild(text0);
    alerta.appendChild(btnCerrar);
    if(tipo=== "aceptar"){
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);
        btnEnviar.onclick = function(){
            paintCard(persona, "estudiante");
            document.getElementById("alerta").remove();
        }
    }else{
        document.body.appendChild(alerta);
    }

    btnCerrar.onclick = function(){
        document.getElementById("alerta").remove();
    }
}
const paintCard = (datos, tipo) =>{
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const temEstudiante= document.getElementById('templateEstudiante').content;
    if(tipo === "ESTUDIANTE"){
        let tempTemplate = temEstudiante.cloneNode(true);
        tempTemplate.querySelector('.title-card').innerHTML = `DATOS DEL PQR <hr>`;
        tempTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        tempTemplate.querySelector('.text-mail').innerHTML = `Correo Electrónico: ${datos.pmail}`;
        tempTemplate.querySelector('.text-telefono').innerHTML = `Teléfono: ${datos.ptele}`;
        tempTemplate.querySelector('.text-msn').innerHTML = `Mensaje: ${datos.pmsn}`;        
        fragmento.appendChild(tempTemplate);
    }
    cardsEstudiantes.appendChild(fragmento);
}

export {addStudent, modalAlert}
