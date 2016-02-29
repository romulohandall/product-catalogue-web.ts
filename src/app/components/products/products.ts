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
    public products:Promise<any>;

    constructor(routeParams:RouteParams, contentfulService:ContentfulService) {
        this.products = contentfulService.getProducts(routeParams.get('categoryId')).then(function (products) {
            return products;
        });
    }
}
