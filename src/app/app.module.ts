import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdListModule, MdToolbarModule, MdButtonModule, MdCardModule, MdTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';

import { ContentfulService } from './contentful.service';

// check this and make a module out of it
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products',  component: ProductListComponent },
  { path: 'products/:slug', component: ProductDetailComponent },
  { path: 'categories',  component: CategoryListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MdListModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdTabsModule
  ],
  exports: [
    MdListModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdTabsModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
