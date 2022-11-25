import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postRestaurent(data:any){
    return this.http.post<any>("  http://localhost:3001/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getRestaurent(){
    return this.http.get<any>("  http://localhost:3001/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateRestaurent(data:any,id:number){
    return this.http.put<any>("  http://localhost:3001/posts"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteRestaurent(id:number){
    return this.http.delete<any>("  http://localhost:3001/posts"+id)
    .pipe(map((res:any)=>{
      return res;
   }))
  }
  getMobile(){
     
    return this.http.get<any>("  http://localhost:3001/mobile")
    .pipe(map((res:any)=>{
      return res;
      
    }))
    
  }
  
}
