import { Departamento } from "./departamento";
export class Articulo{

    constructor(public name:string, public description:string,
        public depto:string, public price:number,
        public image:string){
    }

    public getNombre():string{
        return this.name;
    }
    public getDescripcion():string{
        return this.description;
    }
    public getDepto():string{
        return this.depto;
    }
    public getPrecioUnitario():number{
        return this.price;
    }
    public getImage():string{
        return this.image;
    }
}