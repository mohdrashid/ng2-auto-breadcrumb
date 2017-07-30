/**
 * Created by mohma on 7/30/2017.
 */
import { NgModule } from '@angular/core';
import {Ng2AutoBreadCrumbComponent} from "./components/ng2autobreadcrumb.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
      CommonModule
  ],
  declarations: [ Ng2AutoBreadCrumbComponent],
  providers: [ ],
  exports: [Ng2AutoBreadCrumbComponent]
})
export class Ng2AutoBreadCrumb {}
