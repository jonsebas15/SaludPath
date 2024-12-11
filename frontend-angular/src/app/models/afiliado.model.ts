export interface Afiliado {
    id: number;
    nombre: string;
    tipo_identificacion: string;
    numero_identificacion: string;
    fecha_nacimiento: Date;
    sexo: string;
    direccion: string;
    telefono: string;
    email: string;
    fecha_afiliacion: Date;
    pla_salud: string;
    estado_afiliacion: string;
}