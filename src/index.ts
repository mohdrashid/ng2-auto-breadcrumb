import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ng2AutoBreadCrumbComponent} from './ng2autobreadcrumb.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Ng2AutoBreadCrumbComponent
  ],
  exports: [
    Ng2AutoBreadCrumbComponent
  ]
})
export class Ng2AutoBreadCrumb {
}
