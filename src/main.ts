import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AngularAppReferenceAppComponent, environment } from './app/';

import { appRouterProviders } from './app/angular-app-reference.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AngularAppReferenceAppComponent, [appRouterProviders]);
