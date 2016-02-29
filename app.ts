import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ContentfulService} from './app/services/contentful-service'

import {ProuductCatalogueApp} from './app/prouduct-catalogue-app';
import {enableProdMode} from 'angular2/core';
enableProdMode();

bootstrap(ProuductCatalogueApp, [HTTP_PROVIDERS, ROUTER_PROVIDERS, ContentfulService])
  .catch(err => console.error(err));
