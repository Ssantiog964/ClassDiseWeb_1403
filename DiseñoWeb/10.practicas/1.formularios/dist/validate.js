/* const validateString = () =>{
    let response = (cad.length >=3) ?true : false;
    return response; 
}; */
const validateTelefono = (cad) =>{
    let response = (cad.length >=10) ?true : false;
    return response;
};
class validate{

    validNames(value){
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        const resp = value.match(nombresRX); 
        return resp;
    }
    validMail(value){
        const mailRX = 
        const resp = value.match(mail.mailRX);
        return resp;
    }
    validForm(objeto){
        const valores = Object.values(objeto);
        let resp = valores.findIndex(e => e ===false);// Si no encuentra un false devuelve -1  
        return resp;
    }
}

/* export{ validateString, validateTelefono} */
