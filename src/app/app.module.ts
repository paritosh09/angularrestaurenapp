import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { LearnComponent } from './learn/learn.component';
import { CuriousComponent } from './curious/curious.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MyTitlePipe } from './my-title.pipe';
import { CustomerrorComponent } from './customerror/customerror.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { ImageColorPickerComponent } from './image-color-picker/image-color-picker.component';
import { InnovationComponent } from './innovation/innovation.component';
import { FabricLearnComponent } from './fabric-learn/fabric-learn.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurentDashComponent,
    LoginComponent,
    SignupComponent,
    LearnComponent,
    CuriousComponent,
    CarouselComponent,
    CalculatorComponent,
    MyTitlePipe,
    CustomerrorComponent,
    ImageCropperComponent,
    ImageColorPickerComponent,
    InnovationComponent,
    FabricLearnComponent
  ],
  imports: [
    BrowserModule,CommonModule,ReactiveFormsModule,
    HttpClientModule,RouterModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
