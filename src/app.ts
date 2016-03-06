import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {enableProdMode, provide} from 'angular2/core';

import {ContentfulService} from './app/services/contentful-service';
import {ProductCatalogueApp} from './app/prouduct-catalogue-app';

enableProdMode();

bootstrap(ProductCatalogueApp,
    [HTTP_PROVIDERS, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), ContentfulService])
    .catch(err => console.error(err));

