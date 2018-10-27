/*
Steps :
     Debuggin in Chrome : 
         - Run the app and press F12 to open debugger of Chrome
         - click Sources tab -> app -> debug -> debug.component.ts
         - click on line 32 and insert break point and refresh.
         - click the increment button and observe callstack... and counter value
         - or click Augury, select DebugComponent,
           and click View source link (right side),
           put BP and refresh to run .
           
    Augury:
         - install augury chrome extension
         - click augury and refresh. observe state : counter=1. (you can change)
         - see the injector graph, ngModules 
         - observe elements tab and fadein/fadeout as you click 
    
    Debugging in VS Code:
      - add debugger for Chrome
         - attach debug for chrome - add this extension if you are not getting
        -  click debug icon and select Launch chrome against localhost
        - observe launch.json and set your app port to 3000 or 4200. 
        - click DEBUG in VS code which will start app in debug mode
        - click play button to continue (F5) in vs code (it is not error)
        - click increment button in chrome and switch to VS code and observe varibles /events....
        - again click play button in Chrome (F8 to resume) - Observe in VS code
        
*/

import { Component} from '@angular/core'
@Component({
    selector: 'app-debug',
    template: `
     <h3>Debugging Angular app</h3>
     <button (click)="increment($event)" 
            class="btn btn-primary">Increment
      </button>
     <h4 class="well">{{counter}}</h4>
    `    
})
export class DebugComponent { 
       counter:number;
       constructor(){
           this.counter=1;
       }
       increment(event:any){
           this.counter=this.counter+1;
       }
    }


