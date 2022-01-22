import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { Departamento } from 'src/app/models/departamento';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public articulos:Articulo[]= new Array();
  public deptos: Array<any>;
  public show:boolean=true;
  public articulo:Articulo;
  public showTable:boolean=true;
  public newDepto:string;
  constructor() {
    this.articulos.push(new Articulo('Jabón líquido','Jabón multiusos',2,125,'https://www.jabonesdial.com/media/LHS_221%20ml%20y%20460%20ml.png'));
    this.articulos.push(new Articulo('Downy','Suavisante de telas',2,15,'https://www.chedraui.com.mx/medias/7500435160858-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8OTE4NDl8aW1hZ2UvanBlZ3xoNTMvaGU1LzEwNjEzMjQ3OTAxNzI2LmpwZ3wyZWYzMTgyZTEyNTdhNWVkZmFkZjM4ZTg3Nzg2ODdlMDNkYmU1YTZkOTdkYWY3MGFhM2VhMDFjMTA1YmY0MThk'));
    this.articulos.push(new Articulo('Radio','Radio de alto alcance',0,200,'https://www.sony.es/image/4324cde285ba7fc58aa19281654c3982?fmt=pjpeg&wid=1200&hei=470&bgcolor=F1F5F9&bgc=F1F5F9'));
    this.articulos.push(new Articulo('Lavadora WEED','Lavadora full complete',1,9500,'https://www.lg.com/mx/images/lavadoras-y-secadoras/md07512696/gallery/D_3.jpg'));
    this.articulos.push(new Articulo('Licuadora WearPool','Licuadora para frappe',1,450,'https://ss625.liverpool.com.mx/xl/1107867984.jpg'));
    //this.deptos=Object.keys(Departamento).filter(key => isNaN(+key));
    this.deptos= new Array();
    this.addDeptos();
    this.newDepto="";
    this.articulo= new Articulo("","",0,0,"");
   }

  ngOnInit(): void {
    console.log(this.articulos,this.deptos);
  }
  addArticulo(){
    this.articulos.push(this.articulo);
    
  }
  showForm(){
    this.show=!this.show;
  }
  addDeptos(){
    this.deptos.push({name:'Electronica'});
    this.deptos.push({name:'Electrodomesticos'});
    this.deptos.push({name:'Abarrotes'});
  }
  addDepto(){
    this.deptos.push({name:this.newDepto});
  }
  deleteDepto(id:number){
    this.deptos.splice(id,1);
  }
  showDepartamento(){
    this.showTable=!this.showTable;
  }
}
