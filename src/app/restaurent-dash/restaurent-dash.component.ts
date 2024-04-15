import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurentData } from './restaurent model';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})
export class RestaurentDashComponent implements OnInit {

  formValue!:FormGroup
  restaurentModelObj:RestaurentData=new RestaurentData;
  allRestaurentData: any;
  showAdd!:boolean
  showbtn!:boolean
  constructor(private formBulider:FormBuilder,private api:ApiService,
      ) {  }

  ngOnInit(): void {
    this.formValue=this.formBulider.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      services:['']
      
    })
    this.getAllData();
 

  }
  clickAddRestro(){
  this.formValue.reset()
  this.showAdd=true;
  this.showbtn=false;
  }
  addRestro(){
    this.restaurentModelObj.name=this.formValue.value.name;
    this.restaurentModelObj.email=this.formValue.value.email;
    this.restaurentModelObj.mobile=this.formValue.value.mobile;
    this.restaurentModelObj.address=this.formValue.value.address;
        this.restaurentModelObj.services=this.formValue.value.services;
        this.api.postRestaurent(this.restaurentModelObj).subscribe(res=>{
          console.log(res);
          alert("restaurent record added succesfully");
          let ref=document.getElementById('clear');
          ref?.click();
          this.formValue.reset();
          this.getAllData();
        },
        err=>{
          alert("kuch to galat hai paritosh !")

        }
        )
      
  }
  getAllData(){
  this.api.getRestaurent().subscribe(res=>{
    this.allRestaurentData=res;

  })
  }
  deleteData(data:any){
    this.api.deleteRestaurent(data.id).subscribe(res=>{
      alert("restaurent record deleted succesfully");
      this.getAllData();
  })

}
onEditRestro(data:any){
  debugger;
  this.showAdd=false;
  this.showbtn=true;
  this.restaurentModelObj.id=data.id;
  this.formValue.controls['name'].setValue(data.name);
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['mobile'].setValue(data.mobile);
  this.formValue.controls['address'].setValue(data.address);
  this.formValue.controls['services'].setValue(data.services);
  

}
updateRestro(){
  this.restaurentModelObj.name=this.formValue.value.name;
  this.restaurentModelObj.email=this.formValue.value.email;
  this.restaurentModelObj.mobile=this.formValue.value.mobile;
  this.restaurentModelObj.address=this.formValue.value.address;
      this.restaurentModelObj.services=this.formValue.value.services;
this.api.updateRestaurent(this.restaurentModelObj,this.restaurentModelObj.id).subscribe(res=>{
  alert("record updates ssuccessfully");
  let ref=document.getElementById('clear');
  ref?.click();
  this.formValue.reset();
  this.getAllData();
})
}
}
