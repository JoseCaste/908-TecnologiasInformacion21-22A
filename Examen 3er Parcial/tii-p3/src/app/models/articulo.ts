import { Departamento } from "./departamento";
export class Articulo{

    constructor(public nombre:string, public descripcion:string,
        public depto:number, public precioUnitario:number,
        public image:string){
    }

    public getNombre():string{
        return this.nombre;
    }
    public getDescripcion():string{
        return this.descripcion;
    }
    public getDepto():number{
        return this.depto;
    }
    public getPrecioUnitario():number{
        return this.precioUnitario;
    }
    public getImage():string{
        return this.image;
    }
}