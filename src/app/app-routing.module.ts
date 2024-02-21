import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './presentation/pages/home-page/home-page.component';
import { AboutPageComponent } from './about-me/pages/about-page/about-page.component';
import { ExperiencePageComponent } from './work-experience/pages/experience-page/experience-page.component';
import { ProjectsPageComponent } from './my-projects/pages/projects-page/projects-page.component';
import { ContactPageComponent } from './contact-me/pages/contact-page/contact-page.component';
import { LayoutPageComponent } from './layout/pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home',  component: HomePageComponent },
      { path: 'about-me',  component:  AboutPageComponent},
      { path: 'work-experience',  component: ExperiencePageComponent },
      { path: 'my-projects',  component: ProjectsPageComponent },
      { path: 'contact',  component: ContactPageComponent },
      { path: '**',  redirectTo:'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
