import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';

import {Products} from './components/products/products';
import {Categories} from './components/categories/categories';
import {ProductDetail} from './components/product-detail/product-detail';
import {About} from './components/about/about';
import {Settings} from './components/settings/settings';
import {ContentfulService} from './services/contentful-service';

@Component({
    selector: 'prouduct-catalogue-app',
    providers: [],
    templateUrl: 'app/prouduct-catalogue-app.html',
    styleUrls: ['app/prouduct-catalogue-app.css'],
    directives: [ROUTER_DIRECTIVES],
    pipes: [],
})
@RouteConfig([
    new Route({path: '/products', component: Products, name: 'Products', useAsDefault: true}),
    new Route({path: '/products/:categoryId', component: Products, name: 'ProductsByCategory'}),
    new Route({path: '/productdetail/:productId', component: ProductDetail, name: 'ProductDetail'}),
    new Route({path: '/categories', component: Categories, name: 'Categories'}),
    new Route({path: '/about', component: About, name: 'About'}),
    new Route({path: '/settings', component: Settings, name: 'Settings'}),
])
export class ProductCatalogueApp {

    public spaceName:Promise<string>;

    constructor(public location:Location, public contentfulService:ContentfulService) {

        this.spaceName = contentfulService.getSpace().then(function (data) {
            return data.name;
        });
    }

    public isRouteActive(viewLocation) {
        return viewLocation === this.location.path().split('/')[1];
    }
}
