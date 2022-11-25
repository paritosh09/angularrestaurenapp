import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CuriousComponent } from './curious/curious.component';
import { LearnComponent } from './learn/learn.component';
import { LoginComponent } from './login/login.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { SignupComponent } from './signup/signup.component';
 

const routes :Routes=[
  {
    path:'',redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'restaurent',component:RestaurentDashComponent
  },
  {
    path:'learn',component:LearnComponent
  },
  {
    path:'curious',component:CuriousComponent
  },
  {
    path:'carousel',component:CarouselComponent
  }
]

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
