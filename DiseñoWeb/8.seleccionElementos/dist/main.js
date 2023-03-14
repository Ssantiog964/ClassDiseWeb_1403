'use strict'
//Selección de elementos por id
const seccion1 = document.getElementById('sec1');
console.log(seccion1);
//seccion1.innerHTML="Desde Ja<b>va</b>Script"
//seccion1.textContent = "Desde Javascript"
const seccion2 = document.getElementsByClassName('sec2_');
console.log(seccion2);
//Selección por name
const seccion3 = document.getElementsByName('seccion3');
console.log(seccion3);
//Selección por etiqueta
const labelP = document.getElementsByTagName('p');
console.log(labelP);

//QuerySelector por id #, class ., h1, all

const myMain = document.querySelector('#"container');
const sec1 = document.querySelector('.sec1');
const myH1 = document.querySelector('h1');
const todoP= document.querySelectorAll('p');
console.log(myMain,sec1,myH1,todoP);