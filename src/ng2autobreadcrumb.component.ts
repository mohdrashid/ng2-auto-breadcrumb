import {Component, OnInit} from '@angular/core';
import { NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'ng2-auto-breadcrumb',
  templateUrl: './ng2autobreadcrumb.component.html',
  styleUrls: ['./ng2autobreadcrumb.component.scss']
})
export class Ng2AutoBreadCrumbComponent implements OnInit{
  ngOnInit(): void {
    this.path=this.router.url.replace("#","").split("/");
    this.path.splice(0,1);
    this.href=this.path.map(function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    });
  }


  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};

  public path:Array<string>=[];
  public href:Array<string>=[];
  public router:Router;
  constructor(route: Router){
    this.router=route;

    route.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.path=event.url.split("/");
        this.path.splice(0,1);
        this.href=this.path.map(function (value) {
          return value.charAt(0).toUpperCase() + value.slice(1);
        });
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  route(index){
    let pathToGo="";
    for(let i=0;i<=index;i++){
      pathToGo+="/"+this.path[i];
    }
    this.router.navigate([pathToGo]);

  }
}
