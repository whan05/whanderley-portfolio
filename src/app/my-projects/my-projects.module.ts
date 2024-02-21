import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';


@NgModule({
  declarations: [
    ProjectsPageComponent
  ],
  exports: [
    ProjectsPageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class MyProjectsModule { }
