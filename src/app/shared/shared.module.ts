import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarMenuComponent
  ],
  exports: [
    NavbarMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
