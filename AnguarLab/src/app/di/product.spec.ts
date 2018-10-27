import { Product } from './product';

describe('Product Model', () => {
    it('should create an instance of Product',() => {
        var p=new Product(101,'IPhone',25000,'Mobile');
        expect(p).toBeTruthy();
        expect(p.id).toEqual(101);
        expect(p.title).toEqual("IPhone");
        expect(p.price).toEqual(25000)
        expect(p.description).toEqual('Mobile');
    });	
 
});
	