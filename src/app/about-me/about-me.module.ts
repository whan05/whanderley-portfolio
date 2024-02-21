import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './pages/about-page/about-page.component';



@NgModule({
  declarations: [
    AboutPageComponent
  ],
  exports:[
    AboutPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutMeModule { }
