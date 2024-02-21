import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';



@NgModule({
  declarations: [
    ExperiencePageComponent
  ],
  exports:[
    ExperiencePageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class WorkExperienceModule { }
