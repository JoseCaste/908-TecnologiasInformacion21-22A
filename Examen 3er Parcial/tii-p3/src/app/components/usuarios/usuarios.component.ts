import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';


@Component({
  providers: [UserService],
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public userList:Array<any>= new Array();
  public page:number
    public totalPage:number
  constructor(private userService:UserService) { 
    this.page=1;
    this.totalPage=0;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res:any)=>{
      this.userList=res.data
      this.page=res.page
      this.totalPage=res.total_pages;
    })
  }
  nextPage(){
    this.page+=1;
    this.getNextPage();

  }
  relativePage(nextPage:number){
    //console.log(nextPage);
    this.getRelativePage(nextPage);

  }
  getRelativePage(nextPage: number) {
    this.userService.getNextPage(nextPage).subscribe((res:any)=>{
      this.userList=res.data
      this.page=res.page
      console.log("actual page",this.page);
      
    });
  }
  getNextPage(){
    this.userService.getNextPage(this.page).subscribe((res:any)=>{
      this.userList=res.data
      this.page=res.page
      console.log("actual page",this.page);
    });
  }
}
