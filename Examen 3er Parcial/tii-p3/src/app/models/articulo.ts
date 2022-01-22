import { Departamento } from "./departamento";
export class Articulo{

    constructor(private nombre:string, private descripcion:string,
        private depto:Departamento, private precioUnitario:number,
        private image:string){
    }

    public getNombre():string{
        return this.nombre;
    }
    public getDescripcion():string{
        return this.descripcion;
    }
    public getDepto():Departamento{
        return this.depto;
    }
    public getPrecioUnitario():number{
        return this.precioUnitario;
    }
    public getImage():string{
        return this.image;
    }
}