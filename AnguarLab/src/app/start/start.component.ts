import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  styles: [`
    h3 {
        text-decoration:underline;
        },
    h1 {
          color: blue;
        }
    .red {
          background-color: red;
        }
          `],
encapsulation: ViewEncapsulation.ShadowDom
})
export class StartComponent  {
  authenticated:boolean=true;

   show:boolean=true;
   time:any;
   name:string='Sriram';
   buttonStatus:boolean = false;
   titleStyle:string = 'red';
     
  constructor() {
     window.setInterval(() => {
                this.time=new Date().toString()
        }, 1000)
   }  
// methods   - Event handlers
  Save(event:any){
    alert("Ok.. Your points are redeemed")
    this.buttonStatus=true
  }
}

/*
enum ViewEncapsulation {
  Emulated: 0
  Native: 1
  None: 2
  ShadowDom: 3
}

ViewEncapsulation.Native
  -component is isolated  from global styles

ViewEncapsulation.Emulated (default)
  Inherits Global styles and use its own style

ViewEncapsulation.None
Shadow DOM adds styles to <head> section and applied to
entire DOM.Don't provide any template or style encapsulation.

ViewEncapsulation.ShadowDOM:
Use Shadow DOM to encapsulate styles.

For the DOM this means using modern Shadow DOM 
and creating a ShadowRoot for Component's Host Element.
which is myApp.

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World!</h1>
    <span class="red">Shadow DOM Rocks!</span>
  `,
  styles: [`
    :host {
      display: block;
      border: 1px solid black;
    }
    h1 {
      color: blue;
    }
    .red {
      background-color: red;
    }
 
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
class AppComponent{
}


*/


//https://developer.mozilla.org/en-US/docs/Web/Events


