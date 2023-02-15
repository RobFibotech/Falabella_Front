export interface iCurp
{
    tipo_busqueda:string,
    clave_entidad:string,
    dia_nacimiento:string,
    mes_nacimiento:string,
    nombres:string,
    primer_apellido:string,
    segundo_apellido:string,
    anio_nacimiento:string,
    sexo:string
}

export class Curp implements iCurp {
    tipo_busqueda: string;
    clave_entidad: string;
    dia_nacimiento: string;
    mes_nacimiento: string;
    nombres: string;
    primer_apellido: string;
    segundo_apellido: string;
    anio_nacimiento: string;
    sexo: string;

    constructor()
    {
        this.tipo_busqueda='';
        this.clave_entidad='';
        this.dia_nacimiento='';
        this.mes_nacimiento='';
        this.nombres='';
        this.primer_apellido='';
        this.segundo_apellido='';
        this.anio_nacimiento='';
        this.sexo='';
    }
}
