import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CuriousComponent } from './curious/curious.component';
import { CustomerrorComponent } from './customerror/customerror.component';
import { ImageColorPickerComponent } from './image-color-picker/image-color-picker.component';
import { LearnComponent } from './learn/learn.component';
import { LoginComponent } from './login/login.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { SignupComponent } from './signup/signup.component';
import { FabricLearnComponent } from './fabric-learn/fabric-learn.component';
import { InnovationComponent } from './innovation/innovation.component';
 
 

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
    path:'learn',component:LearnComponent, 
  },
  {
    path:'curious',component:CuriousComponent,canActivate: [AuthguardGuard] 
  },
  {
    path:'carousel',component:CarouselComponent,canActivate: [AuthguardGuard] 
  },
  {
    path:'calculator',component:CalculatorComponent
  },
  {
    path:'image-picker',component:ImageColorPickerComponent
  },
  
  {
    path:'fabric', component:FabricLearnComponent
  },
  {
    path:'innovation', component:InnovationComponent
  },
  {
    path:'**', component:CustomerrorComponent
  }
]

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardGuard]
  
})
export class AppRoutingModule { }
