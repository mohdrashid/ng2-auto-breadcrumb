(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
	(factory((global['ng2-auto-breadcrumb'] = {}),global._angular_core,global._angular_common,global._angular_router));
}(this, (function (exports,_angular_core,_angular_common,_angular_router) { 'use strict';

var Ng2AutoBreadCrumbComponent = (function () {
    /**
     * @param {?} route
     */
    function Ng2AutoBreadCrumbComponent(route) {
        var _this = this;
        this.disabled = false;
        this.status = { isopen: false };
        this.path = [];
        this.href = [];
        this.router = route;
        route.events.forEach(function (event) {
            if (event instanceof _angular_router.NavigationStart) {
                _this.path = event.url.split("/");
                _this.path.splice(0, 1);
                _this.href = _this.path.map(function (value) {
                    return value.charAt(0).toUpperCase() + value.slice(1);
                });
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    /**
     * @return {?}
     */
    Ng2AutoBreadCrumbComponent.prototype.ngOnInit = function () {
        this.path = this.router.url.replace("#", "").split("/");
        this.path.splice(0, 1);
        this.href = this.path.map(function (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        });
    };
    /**
     * @param {?} index
     * @return {?}
     */
    Ng2AutoBreadCrumbComponent.prototype.route = function (index) {
        var /** @type {?} */ pathToGo = "";
        for (var /** @type {?} */ i = 0; i <= index; i++) {
            pathToGo += "/" + this.path[i];
        }
        this.router.navigate([pathToGo]);
    };
    return Ng2AutoBreadCrumbComponent;
}());
Ng2AutoBreadCrumbComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ng2-auto-breadcrumb',
                template: "    <ol class=\"breadcrumb\"> <li><a href=\"/\">Home</a></li> <li *ngFor=\"let item of path; index as i\" class=\"todo-list-item\" [id]=\"i\" ><a routerLinkActive=\"active\" href=\"javascript:void(0)\" (click)=\"route(i)\">{{href[i]}}</a></li> </ol> ",
                styles: [".breadcrumb { border-radius: 0; padding: 10px 15px; background: #e9ecf2; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); margin: 0; } .breadcrumb { padding: 8px 15px; margin-bottom: 20px; list-style: none; background-color: #f5f5f5; border-radius: 4px; } ul, ol { margin-top: 0; margin-bottom: 10px; } * { box-sizing: border-box; } .breadcrumb > li { display: inline-block; } .breadcrumb a { text-decoration: none; } .breadcrumb > li + li:before { padding: 0 5px; color: #ccc; content: \"/\"; } "]
            },] },
];
/**
 * @nocollapse
 */
Ng2AutoBreadCrumbComponent.ctorParameters = function () { return [
    { type: _angular_router.Router, },
]; };

var Ng2AutoBreadCrumb = (function () {
    function Ng2AutoBreadCrumb() {
    }
    return Ng2AutoBreadCrumb;
}());
Ng2AutoBreadCrumb.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
                ],
                declarations: [
                    Ng2AutoBreadCrumbComponent
                ],
                exports: [
                    Ng2AutoBreadCrumbComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
Ng2AutoBreadCrumb.ctorParameters = function () { return []; };

exports.Ng2AutoBreadCrumb = Ng2AutoBreadCrumb;

Object.defineProperty(exports, '__esModule', { value: true });

})));
