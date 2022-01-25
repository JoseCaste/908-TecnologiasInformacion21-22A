import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    private url_base:string;
    constructor(private httpClient: HttpClient){ 
        this.url_base="https://reqres.in/api/users?per_page=3";
    }
    getUsers(){
        return this.httpClient.get(this.url_base);
    }
    getNextPage(page:number){
        return this.httpClient.get(`${this.url_base}&page=${page}`)
    }
}