# Auto Breadcrumb

This is a Angular JS 2/4 module that can be included in projects to automatically display breadcrumb for that page.

## Dependencies
Optionally uses bootstrap.css (v 3.x.x) for styling of some elements (although the component is fully functional without it and there is a flag to turn off the dependency).

## Install
Install the module via npm:

    npm install auto-breadcrumb --save

## Usage
Import the this module into your module using forRoot()

    import {AutoBreadCrumb} from 'auto-breadcrumb';

	@NgModule({
        imports: [AutoBreadCrumb]
    })
    export class AppModule {
        ...
    }


Place the breadcrumb selector in your component's html where you added your router-outlet:

	<breadcrumb></breadcrumb>
	<router-outlet></router-outlet>
	
## Build

    npm install
    npm build

To build a standalone bundle:

    npm bundles

## Running

    npm start