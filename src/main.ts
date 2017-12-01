import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// todo: find a more suited logger method for this
platformBrowserDynamic().bootstrapModule(AppModule)
.then(success => console.log('App bootstraped succesfully.'))
.catch(error => console.log('App failed to bootstrap. Error: ' + error));

