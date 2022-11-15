import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  pageTitle = 'Home';
  routes = this.router.config.map((route: Route) => route?.path || 'Home');

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  changeRoute(route: string){
    this.pageTitle = route;
    const pathToGo = route === 'Home' ? '/' : route;
    this.router.navigate([pathToGo]);   
  }

}
