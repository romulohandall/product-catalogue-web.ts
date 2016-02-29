import {Injectable} from 'angular2/core';
import {ContentfulModel} from './contentful-model';

var contentful = require('contentful');

@Injectable()
export class ContentfulService {

  static SESSION_STORAGE_APIKEY:string = 'cfApiKey';

  static SESSION_STORAGE_SPACEID:string = 'cfSpaceId';

  private sdkClient;

  private entriesPromise:Promise<any>;

  isUserSessionStored = false;

  isUserSpaceLoaded = false;

  model:ContentfulModel = new ContentfulModel();

  constructor() {

    // Bootstrap from session.
    let spaceId = sessionStorage.getItem(ContentfulService.SESSION_STORAGE_SPACEID);
    let apiKey = sessionStorage.getItem(ContentfulService.SESSION_STORAGE_APIKEY);
    if (spaceId && apiKey) {

      console.log('bootstrapped session:\n', 'spaceId: ' + spaceId + '\n', 'apiKey: ' + apiKey + '\n');

      this.isUserSessionStored = true;
      this.isUserSpaceLoaded = true;


      this.model.spaceId = spaceId;
      this.model.apiKey = apiKey;

    }

    this.connect();
  }

  private connect() {

    this.sdkClient = contentful.createClient({
      space: this.model.spaceId,
      accessToken: this.model.apiKey
    });

    this.entriesPromise = this.sdkClient.entries().then(function (data) {
      return data;
    }).catch(function (reason) {
      console.error('Could not connect to space:', this.model.spaceId);
      console.log(reason);
    });

  }

  getSpace() {
    return this.sdkClient.space();
  }

  getProducts(categoryId:string = null) {
    //console.log('getProducts', categoryId);
    // Maintain scope in promises.
    let productContentType = this.model.productContentType;
    return this.entriesPromise.then(function (entries:any[]) {
      // Filter all entries.
      return entries.filter(
        function (entry:any) {
          // Filter by category if applicable.
          if (categoryId != null) {
            let categoryMatch;
            for (let i in entry.fields.categories) {
              if (entry.fields.categories[i].sys.id == categoryId) {
                categoryMatch = true;
                continue;
              }
            }
            return entry.sys.contentType.sys.id == productContentType &&
              categoryMatch;
            // Or just filter by products.
          } else {
            return entry.sys.contentType.sys.id == productContentType;
          }
        }
      )
    });
  }

  getProduct(productId:string = null) {
    return this.entriesPromise.then(function (entries:any[]) {
      return entries.filter(function (entry:any) {
        return entry.sys.id == productId;
      })
    });
  }

  getCategories() {
    let categoryContentType = this.model.categoryContentType;
    return this.entriesPromise.then(function (entries:any[]) {
      return entries.filter(function (entry:any) {
        return entry.sys.contentType.sys.id == categoryContentType;
      })
    });
  }

  setSessionCredentials(apiKey:string, spaceId:string):void {
    console.log('setSessionCredentials\n', 'spaceId: ' + spaceId + '\n', 'apiKey: ' + apiKey + '\n');
    this.isUserSessionStored = true;
    sessionStorage.setItem(ContentfulService.SESSION_STORAGE_APIKEY, apiKey);
    sessionStorage.setItem(ContentfulService.SESSION_STORAGE_SPACEID, spaceId);

  }

  clearSessionCredentials():void {
    console.log('removeSessionCredentials');
    this.isUserSessionStored = false;
    sessionStorage.removeItem(ContentfulService.SESSION_STORAGE_APIKEY);
    sessionStorage.removeItem(ContentfulService.SESSION_STORAGE_SPACEID);

  }
}


