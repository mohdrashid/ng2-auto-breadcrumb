# Auto Breadcrumb

This is a Angular JS 2/4 module that can be included in projects to automatically display breadcrumb for that page.

## Dependencies
Optionally uses bootstrap.css (v 3.x.x) for styling of some elements (although the component is fully functional without it and there is a flag to turn off the dependency).

## Install
Install the module via npm:

    npm install ng2-auto-breadcrumb --save

## Usage
Declare this component in the declaration
```typescript
import {Ng2AutoBreadCrumbComponent} from 'ng2-auto-breadcrumb';

// In your App's module:
@NgModule({
    imports: [
    ],
    declarations: [
      Ng2AutoBreadCrumbComponent
    ],
    providers: [{
    }],
    bootstrap: [  ]
})
```


Place the breadcrumb selector in your component's html where you added your router-outlet:
```HTML
	<ng2-auto-breadcrumb></ng2-auto-breadcrumb>
	<router-outlet></router-outlet>
```