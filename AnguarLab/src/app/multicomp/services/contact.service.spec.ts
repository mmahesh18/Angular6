import { TestBed, inject } from '@angular/core/testing';
import { Contact } from './contact';
import { ContactService } from './contact.service';

let testService: ContactService;
let mockPaste: Contact;
describe('Contact Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    // imports: [AppTestingModule],
    });
  
    testService= TestBed.get(ContactService);
    mockPaste = 
        {  name: "Murthy", 
            email:"murthy@gmail.com", 
           phone: "2445678"
        };
   
  });
   // async testing - promise
    it('#getContact  should return an array with Contact objects',async() => {
			testService.getContacts().then(value => {
	        let actual= Object.getOwnPropertyNames(value[0]);
            let expected = 
                 Object.getOwnPropertyNames(mockPaste);

			expect(actual).toEqual(expected);
		});
	});	
});