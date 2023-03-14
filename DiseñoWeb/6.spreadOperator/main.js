'use strict'
//Expandir valores

let myArray = [2,4,6,8,10];

//console.log(...myArray);

let myArray2 =[1,3,5,7,9,...myArray]

//console.log(...myArray2);

//PROPAGACIÓN CON UNA FUNCIÓN

let lenguajes = ["JS","PHP","PYTHON","JAVA"];

const myPrint = (lg1,lg2) =>{
    console.log(`*** Lenguajes de Programación ****
                    1.${lg1}
                    2.${lg2}
                    3.${resto}`); 
}

myPrint("C++", "C#");    
myPrint(...lenguajes,"Cobol", "Dart");