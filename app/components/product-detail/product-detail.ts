import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContentfulService} from '../../services/contentful-service';

@Component({
  selector: 'product-detail',
  templateUrl: 'app/components/product-detail/product-detail.html',
  styleUrls: ['app/components/product-detail/product-detail.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class ProductDetail {
  product:any;
  images:any;
  constructor(routeParams:RouteParams, contentfulService:ContentfulService) {
    contentfulService.getProduct(routeParams.get('productId')).then(entries => {
      this.product = entries[0];
      this.images = entries[0].fields.image;
    });
  }
}
