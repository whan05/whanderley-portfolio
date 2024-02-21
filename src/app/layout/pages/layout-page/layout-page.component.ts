import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  constructor( private router: Router) {}
  public path = this.router.url


  addImage( image:string ){
    console.log(this.path)
    if (this.path === '/home') {
      image =  this.router.url.slice(1, this.router.url.length)

      return image
    }
    if (this.path === '/about-me') {
      // image =  this.router.url.slice(1, this.router.url.length)
      return image
    }


    return '';
  }



}
