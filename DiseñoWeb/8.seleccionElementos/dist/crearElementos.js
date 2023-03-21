'use strict'
const myElement = document.createElement('div');
myElement.id="div1";
myElement.className="div1";
myElement.innerHTML = "Esto es un div creado desde JS CON BENDICIÓN VE";
myElement.style ="color:aquamarine"
document.body.appendChild(myElement);
//Insertar en en header
const header = document.getElementById('myHeader');
header.appendChild(myElement);

let myParrafo1 = document.createElement('p');
myParrafo1.setAttribute('class','sec3');
//const myParrafo2 = document.createElement('p');
myParrafo1.innerHTML ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis iusto adipisci at aliquam repellendus! Quam, ut dicta eius pariatur, earum tempore, in ullam temporibus sunt nesciunt voluptatibus dignissimos iste aliquid.";
myParrafo2 = myParrafo1.cloneNode(true);
//myParrafo1.innerHTML="<strong>Holitas desde JS</strong>"
const sec2 = document.getElementById('sec2');
sec2.appendChild(myParrafo2);
sec2.appendChild(myParrafo1);