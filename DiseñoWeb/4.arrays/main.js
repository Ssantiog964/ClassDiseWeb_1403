'use strict';
const myArray1 = [3,5,6,'Hola',3.6, false,'1'];
let myArray2 = new Array('a','b','c');

/* console.log(myArray1);
console.log(myArray2); */

//iterar arreglos

for(let i;i<myArray1.length; i++){
    //console.log(myArray1[i]);
}
//variaciones del for in y for of

for(let j in myArray2){
    //console.log(myArray2[j]);
}
for(let k of myArray1){
    console.log(k);
}

myArray2.forEach(element => {
    console.log(element)
});