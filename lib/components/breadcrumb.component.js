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
var BreadCrumbComponent = (function () {
    function BreadCrumbComponent(route) {
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
    BreadCrumbComponent.prototype.ngOnInit = function () {
        this.path = this.router.url.replace("#", "").split("/");
        this.path.splice(0, 1);
        this.href = this.path.map(function (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        });
    };
    BreadCrumbComponent.prototype.route = function (index) {
        var pathToGo = "";
        for (var i = 0; i <= index; i++) {
            pathToGo += "/" + this.path[i];
        }
        this.router.navigate([pathToGo]);
    };
    BreadCrumbComponent = __decorate([
        Component({
            selector: 'breadcrumb',
            template: "\n        <ol class=\"breadcrumb\">\n          <li><a href=\"/\">Home</a></li>\n          <li *ngFor=\"let item of path; index as i\" class=\"todo-list-item\" [id]=\"i\" ><a routerLinkActive=\"active\" href=\"javascript:void(0)\" (click)=\"route(i)\">{{href[i]}}</a></li>\n        </ol>\n  "
        }),
        __metadata("design:paramtypes", [Router])
    ], BreadCrumbComponent);
    return BreadCrumbComponent;
}());
export { BreadCrumbComponent };

//# sourceMappingURL=breadcrumb.component.js.map
