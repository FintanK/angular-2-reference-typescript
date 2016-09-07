import { Component } from '@angular/core';
import { NavBarComponent } from './components/ui/navbar/navbar.component';
import { BannerComponent } from './components/ui/banner/banner.component';

import { HomeComponent } from './components/pages/home/home.component'
import { AboutComponent } from './components/pages/about/about.component'

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'angular-app-reference-app',
  templateUrl: 'angular-app-reference.component.html',
  styleUrls: ['angular-app-reference.component.css'],
  directives: [NavBarComponent, BannerComponent, HomeComponent, AboutComponent, ROUTER_DIRECTIVES]
})
export class AngularAppReferenceAppComponent {}
