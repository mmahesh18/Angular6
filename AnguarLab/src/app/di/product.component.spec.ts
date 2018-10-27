
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {ProductComponent} from './product.component';
import {ProductService} from "./product.service";
import {Product} from './Product'

describe('ATB Service and Component Integrated Testing', () => {

  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let productService: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [ProductService],
      //imports:[CutsomModule]
    });

    // create component
    fixture = TestBed.createComponent(ProductComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // ProductService provided to the TestBed
    productService = TestBed.get(ProductService);

  });

  it('getProds defined in Component and getProduct returns 101', () => {
    component.ngOnInit();
    let p:Product=component.product;
    expect(p.id).toEqual(101);
  });  
});
