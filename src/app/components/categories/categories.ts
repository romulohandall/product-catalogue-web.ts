import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {ContentfulService} from '../../services/contentful-service';

@Component({
  selector: 'categories',
  templateUrl: 'app/components/categories/categories.html',
  styleUrls: ['app/components/categories/categories.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

export class Categories {
  categories:any;
  constructor(contentfulService:ContentfulService) {
    let that = this;
    contentfulService.getCategories().then(function (entries) {
      that.categories = entries;
console.log("categories.ts",that.categories);
    });

  }
}
