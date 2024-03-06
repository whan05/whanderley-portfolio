import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { ImagePipe } from '../pipes/images/generate-image.pipe';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    MySkillsComponent,
    ImagePipe
  ],
  exports:[
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class PresentationModule { }
