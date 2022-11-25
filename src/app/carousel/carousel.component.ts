import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  appList:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.low();
  }
  low(){
  this.api.getMobile().subscribe(res=>{
    this.appList=res;

  })
}
}
