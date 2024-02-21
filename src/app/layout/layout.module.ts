import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from '../shared/shared.module';
import { BackgroundImagePipe } from './pipes/background-image.pipe';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    LayoutPageComponent,
    BackgroundImagePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { }
