import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {

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

  ngOnInit(): void {
    this.addTitle(this.path)
  }


  changeRoute(event: string){

    this.addTitle(event)

  }

  addTitle(route: string) {

    switch (route) {
      case '/home':
        this.title = 'Im Web Developer'
        break;

      case '/about-me':
        this.title = 'Joinme'
        break;


      default:
        break;
    }

    console.log(event)
    console.log(this.router.url)
    return event;

  }
}
