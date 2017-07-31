import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

// change these to include your own settings
const CONFIG = {
  space: 'wl1z0pal05vy',
  accessToken: '0e3ec801b5af550c8a1257e8623b1c77ac9b3d8fcfc1b2b7494e3cb77878f92a',

  contentTypeIds: {
    product: '2PqfXUJwE8qSYKuM0U6w8M',
    category: '6XwpTaSiiI2Ak2Ww0oi6qa'
  }
}

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  // fetch products
  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.product
    }, query))
    .then(res => res.items);
  }

  // fetch products with a given slug
  // and return one of them
  getProduct(slug: string): Promise<Entry<any>> {
    return this.getProducts({ 'fields.slug': slug })
    .then(items => items[0])
  }

  // fetch categories
  getCategories(): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries({
      content_type: '6XwpTaSiiI2Ak2Ww0oi6qa'
    })
    .then(res => res.items);
  }
}
