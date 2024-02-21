import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './presentation/pages/home-page/home-page.component';
import { PresentationModule } from './presentation/presentation.module';
import { AboutMeModule } from './about-me/about-me.module';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { MyProjectsModule } from './my-projects/my-projects.module';
import { ContactMeModule } from './contact-me/contact-me.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PresentationModule,
    AboutMeModule,
    WorkExperienceModule,
    MyProjectsModule,
    ContactMeModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
