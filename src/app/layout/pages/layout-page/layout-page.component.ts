import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  constructor(private router: Router) { }
  public path = this.router.url;
  public title: string = '';


  addElements(image: string) {
    if (this.path === '/home') {
      image = this.router.url.slice(1, this.router.url.length)

      return image
    }
    if (this.path === '/about-me') {
      image = this.router.url.slice(1, this.router.url.length)
      return image
    }


    return '';
  }

  addTitle(title: string) {

    if (this.path === '/home') {

      title = this.title = "I'm a Web Developer"
      console.log(title)

      return title
    }
    if (this.path === '/about') {

      title = this.title = "Join me my profesional experience"
      console.log(title)

      return title
    }

    return '';

  }



}
