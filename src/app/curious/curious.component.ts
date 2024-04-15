import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-curious',
  templateUrl: './curious.component.html',
  styleUrls: ['./curious.component.css']
})
export class CuriousComponent implements OnInit {
 
  appList:any;
  constructor(  private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo(){
 
    {
      this.api.getMobile ().subscribe(res=>{
        this.appList=res;
    
      })
      }
    
    }
    move(){
      this.router.navigate(['carousel'])
    }
}
