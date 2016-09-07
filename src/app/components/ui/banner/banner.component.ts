import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.css']
})
export class BannerComponent {

  private title: string;
  private description: string;

  constructor () {
    this.title = "Welcome";
    this.description = "This is my Angular 2 reference app with a few simple custom components for the navigation bar, banner, footers etc.";
  }

}
