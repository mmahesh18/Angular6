import { TestBed, inject } from '@angular/core/testing';
import { Product } from './product';
import { ProductService } from './product.service';
//import { AppTestingModule } from './app-testing-module';

let testService: ProductService;
describe('Product Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      //imports: [AppTestingModule],
    });
  
    testService= TestBed.get(ProductService);
  });

	it('#getProduct  should return product',async() => {
     
        let p:Product=testService.getProduct();
        expect(p.id).toEqual(101);

        /*
        
        //promise async call testing
		testService.getProduct().then(value => {
			expect(testService.getProduct().id).toEqual(102);			
        });
        */

	});
	
});