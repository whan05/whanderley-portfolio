import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent {

  constructor( 
    private router: Router
  ){}

  @Output() changeTitleEvent = new EventEmitter()

  public menuItems = [
    { title: 'Home', route: '/home'},
    { title: 'About Me', route: '/about-me'},
    { title: 'Work Experience', route: '/work-experience'},
    { title: 'My Projects', route: '/my-projects'},
    { title: 'Les´t connect', route: '/my-contact'},
  ]

  public text: string = '';


  changeTitle(value: string){
    
    this.changeTitleEvent.emit(value)

  }
}
