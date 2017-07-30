var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavigationStart, Router } from "@angular/router";
var Ng2AutoBreadCrumbComponent = (function () {
    function Ng2AutoBreadCrumbComponent(route) {
        var _this = this;
        this.disabled = false;
        this.status = { isopen: false };
        this.path = [];
        this.href = [];
        this.router = route;
        route.events.forEach(function (event) {
            if (event instanceof NavigationStart) {
                _this.path = event.url.split("/");
                _this.path.splice(0, 1);
                _this.href = _this.path.map(function (value) {
                    return value.charAt(0).toUpperCase() + value.slice(1);
                });
            }
        });
    }
    Ng2AutoBreadCrumbComponent.prototype.ngOnInit = function () {
        this.path = this.router.url.replace("#", "").split("/");
        this.path.splice(0, 1);
        this.href = this.path.map(function (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        });
    };
    Ng2AutoBreadCrumbComponent.prototype.route = function (index) {
        var pathToGo = "";
        for (var i = 0; i <= index; i++) {
            pathToGo += "/" + this.path[i];
        }
        this.router.navigate([pathToGo]);
    };
    Ng2AutoBreadCrumbComponent = __decorate([
        Component({
            selector: 'ng2-auto-breadcrumb',
            template: "\n        <ol class=\"breadcrumb\">\n          <li><a href=\"/\">Home</a></li>\n          <li *ngFor=\"let item of path; index as i\" class=\"todo-list-item\" [id]=\"i\" ><a routerLinkActive=\"active\" href=\"javascript:void(0)\" (click)=\"route(i)\">{{href[i]}}</a></li>\n        </ol>\n  ",
            styles: ["\n    .breadcrumb {\n      border-radius: 0;\n      padding: 10px 15px;\n      background: #e9ecf2;\n      box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n      margin: 0;\n    }\n    .breadcrumb {\n      padding: 8px 15px;\n      margin-bottom: 20px;\n      list-style: none;\n      background-color: #f5f5f5;\n      border-radius: 4px;\n    }\n    ul, ol {\n      margin-top: 0;\n      margin-bottom: 10px;\n    }\n    * {\n      box-sizing: border-box;\n    }\n    .breadcrumb > li {\n      display: inline-block;\n    }\n    .breadcrumb a {\n      text-decoration: none;\n    }\n    .breadcrumb > li + li:before {\n      padding: 0 5px;\n      color: #ccc;\n      content: \"/\\A0\";\n    }\n  "]
        }),
        __metadata("design:paramtypes", [Router])
    ], Ng2AutoBreadCrumbComponent);
    return Ng2AutoBreadCrumbComponent;
}());
export { Ng2AutoBreadCrumbComponent };

//# sourceMappingURL=ng2autobreadcrumb.component.js.map
