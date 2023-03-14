class Persona{
    constructor(name,lastName,avg){
        this.nombre=name;
        this.apellidos=lastName;
        this.promedio=avg;
    }
    get nombre(){
        return this.nombre;
    }
    set nombre(name){
        this.nombre = name;
    }
    
    //métodos
    getData(){
     const data = `Nombres:${this.nombre} Apellidos:`${this.apellidos} this.promedio:${this.promedio};
     return data;
    }
    getValoracionAvg(){
        let response = (this.promedio>=3) ? "Promedio Aprobado" : "Promedio reprobado";
        return Response;     
    }
}
export{Persona};