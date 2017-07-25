import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {ContentfulService} from '../../services/contentful-service';

@Component({
    selector: 'categories',
    templateUrl: 'app/components/categories/categories.html',
    styleUrls: ['app/components/categories/categories.css'],
    providers: [],
    directives: [ROUTER_DIRECTIVES],
    pipes: [],
})

export class Categories {
    public categories:any;
    constructor(contentfulService:ContentfulService) {
        contentfulService.getCategories().then(entries => {
            this.categories = entries;
        });

    }
}
