import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent {

  public menuItems = [
    { title: 'About Me', route: '/about-me'},
    { title: 'Work Experience', route: '/work-experience'},
    { title: 'My Projects', route: '/my-projects'},
    { title: 'Les´t connect', route: '/my-contact'},
  ]


}
