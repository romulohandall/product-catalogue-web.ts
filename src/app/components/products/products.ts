import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContentfulService} from '../../services/contentful-service';

@Component({
  selector: 'products',
  templateUrl: 'app/components/products/products.html',
  styleUrls: ['app/components/products/products.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class Products {
  products:Promise<any>;

  constructor(routeParams:RouteParams, contentfulService:ContentfulService) {
    //console.log('route param:', routeParams.get('categoryId'));
    //let that = this;

    this.products = contentfulService.getProducts(routeParams.get('categoryId')).then(function(products) {
      //console.log('qwoooo', products);
      return products;
    });

    //contentfulService.getProducts(routeParams.get('categoryId')).then(function (entries) {
    //  that.products = entries;
    //  console.log("products.ts",that.products);
    //});
  }
}
