# ng2-auto-breadcrumb

## Installation

To install this library, run:

```bash
$ npm install ng2-auto-breadcrumb --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2-auto-breadcrumb
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { Ng2AutoBreadCrump } from 'ng2-auto-breadcrumb';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    Ng2AutoBreadCrump
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Place the breadcrumb selector in your component's html where you added your router-outlet:

```html
<ng2-auto-breadcrumb></ng2-auto-breadcrumb>
<router-outlet></router-outlet>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Mohammed Rashid](mailto:mohmad.rashid@hotmail.com)
