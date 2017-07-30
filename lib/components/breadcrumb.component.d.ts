import { OnInit } from '@angular/core';
import { Router } from "@angular/router";
export declare class BreadCrumbComponent implements OnInit {
    ngOnInit(): void;
    disabled: boolean;
    status: {
        isopen: boolean;
    };
    path: Array<string>;
    href: Array<string>;
    router: Router;
    constructor(route: Router);
    route(index: any): void;
}
