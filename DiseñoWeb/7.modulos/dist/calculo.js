'use strict'
const potencia = (base,potencia)=>{
    return Math.pow(base,potencia);
};

const raizCuadrada = (num) => {  
    return Math.sqrt(num);
};
// as para colocar un alias.
export {potencia,raizCuadrada as rCuadrada};