import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public articulos:any[]= new Array();
  public deptos: Array<any>;
  public show:boolean=true;
  public articulo:Articulo;
  public showTable:boolean=true;
  public newDepto:string;
  public updateArticle:boolean=true;
  public temporalId:String;
  constructor(private route:Router, private activateRoute:ActivatedRoute, private httpClient:HttpClient) {
    this.loadArticles();
    /*this.articulos.push(new Articulo('Jabón líquido','Jabón multiusos',"Abarrotes",125,'https://www.jabonesdial.com/media/LHS_221%20ml%20y%20460%20ml.png'));
    this.articulos.push(new Articulo('Downy','Suavisante de telas',"Abarrotes",15,'https://www.chedraui.com.mx/medias/7500435160858-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8OTE4NDl8aW1hZ2UvanBlZ3xoNTMvaGU1LzEwNjEzMjQ3OTAxNzI2LmpwZ3wyZWYzMTgyZTEyNTdhNWVkZmFkZjM4ZTg3Nzg2ODdlMDNkYmU1YTZkOTdkYWY3MGFhM2VhMDFjMTA1YmY0MThk'));
    this.articulos.push(new Articulo('Radio','Radio de alto alcance',"Electrodomestico",200,'https://www.sony.es/image/4324cde285ba7fc58aa19281654c3982?fmt=pjpeg&wid=1200&hei=470&bgcolor=F1F5F9&bgc=F1F5F9'));
    this.articulos.push(new Articulo('Lavadora WEED','Lavadora full complete',"Electrodomestico",9500,'https://www.lg.com/mx/images/lavadoras-y-secadoras/md07512696/gallery/D_3.jpg'));
    this.articulos.push(new Articulo('Licuadora WearPool','Licuadora para frappe',"Electrodomestico",450,'https://ss625.liverpool.com.mx/xl/1107867984.jpg'));*/
    this.deptos= new Array();
    this.addDeptos();
    this.newDepto="";
    this.articulo= new Articulo("","","",0,"");
    this.temporalId="";
   }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(params=>{
        console.log("Parametros de url",params);
    })
    //console.log(this.articulos,this.deptos);
    this.activateRoute.params.subscribe((params: Params)=>{
      if(params['existencia'] != undefined)
        console.log("Parámetro de existencia ",params['existencia']);
      
    });
  }
  addArticulo(){
    this.httpClient.post("http://localhost:3700/articles",this.articulo).subscribe(data=>{
      this.articulo= new Articulo("","","",0,"");
      this.loadArticles();
    })
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
  hideFormUpdate(){
    this.updateArticle=!this.updateArticle;
  }
  redirectHome(){
    this.route.navigate(["/"])
  }
  updateArticle_(){
    console.log("-----",this.temporalId);
    
    this.httpClient.put(`http://localhost:3700/articles?id=${this.temporalId}`,this.articulo).subscribe(data=>{
      this.updateArticle=!this.updateArticle;
      this.articulo= new Articulo("","","",0,"");
      this.loadArticles();
    });
  }
  deleteItem(id: string){
    this.httpClient.delete(`http://localhost:3700/articles?id=${id}`).subscribe(data=>{
      this.loadArticles();
    })
    
  }
  searchItem(id:string){
    axios.get(`http://localhost:3700/articles?id=${id}`).then(data=>{
      let article=data.data;
      this.updateArticle=!this.updateArticle;
      this.temporalId=article._id;
      this.articulo.name=article.name;
      this.articulo.description=article.description;
      this.articulo.image=article.image;
      this.articulo.depto=article.depto;
      this.articulo.price=article.price;
    })
  }
  loadArticles() {
    axios.get("http://localhost:3700/articles").then(data=>{
      this.articulos=data.data;
    })
  }
}


