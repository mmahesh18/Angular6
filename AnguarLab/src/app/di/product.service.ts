import {Injectable} from '@angular/core';
import {Product} from './product'

//provide your service inside the supervisor itself by putting the
// providedIn:root property within the "@injectable" decorator.

@Injectable({providedIn:'root'}) // new feature of Angular 6
export class ProductService{

  //Service
  getProduct(): Product {
       return new Product
    ( 101, "iPhone 8", 1249.99,"The latest iPhone, 9-inch screen");
    }   
}







/*
   1. Global level service injection
   2. Module level service injection
   3. Component level service injection
*/





/*
  Naming conventions:
    product.ts
    product.service.ts
    product.component.ts
    product.component.html
    product.component.css
    product.grid.directive.ts
    product-filter.pipe.ts
    product.module.ts
*/