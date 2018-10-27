//Component Life Cycle
import { 
  Component,  Input, OnInit,OnChanges,DoCheck,OnDestroy,
  ChangeDetectorRef,SimpleChanges} from '@angular/core';

// Parent component
@Component({
  selector: 'app-lifecycle',
  template: `
    <h1 class="container">Google Search:
        <input type="text" [(ngModel)]="search">
     </h1>

    <child [search]="search"></child>
  `
})
export class CompLifeCycleComponent {
  search: string = 'computers';
}

//child component
@Component({
  selector: 'child',
  template: `
  <h1 class='text-danger container' id="txt">Search Text</h1>
  <div class='container'>
   <h3 class='text-primary'>{{search}}</h3>
   
  </div>
    `
})
export class ChildComponent 
            implements OnInit,OnChanges,DoCheck,OnDestroy { 
  changed:boolean=false;  
  @Input() 
  search: string;
  
  /** search isn't initialized yet */
  constructor(public cd:ChangeDetectorRef) {
    // inject service here
    console.log(`constructor: ${this.search}`);// undefined
    this.cd.detach();
  }  
 ngOnInit() {   
   // fired only once 
     // invoke service method for initial data, load data from localstorage
    console.log(`ngOnInit: ${this.search}`);// computers
    // http.get('website.com/api/service/search")
    //debugger;
    
    // raise custom events
    /*
    setTimeout(() => {
      this.cd.reattach()
    },5000); 
    */
  }
  /*Invoked every time an @Input() property changes via the data binding */
  ngOnChanges(changes: SimpleChanges):void {
   // invoke service method to handle changes - model validation
    console.log(`ngOnChanges: ${this.search}`);     
    // ajax call to service to get live data 
    //var searchdata=http.get(url+"?q="+search)
   
  }  
  ngDoCheck() {
    //this.cd.detectChanges()   equivalent to this.cd.reattach()
    // Write custom change detection strategy logic here
    console.log("ngDoCheck- Change detection strategy")
    //to re-render even it is detached in constructor 
  
    /*
  if(this.search.length>10 ){
    // ajax call to server and get data 
   this.cd.detectChanges();  // $spply()
  }
  */
  
   this.cd.checkNoChanges();//safe guard changes
  }  

 ngAfterViewChecked() {
   console.log("h1 tag text: "  +document.getElementById("txt").innerText)
   // you can access Real DOM - document.getElementID("div1").append("fjsjfs")
   // Jquery  $("#div1").fadeIn()
   //Called after every check of the component's view. Applies to components only.
   //Add 'implements AfterViewChecked' to the class.
   
 }
  ngOnDestroy() {
    // Remove the component state here, unsubscribe observer,log
    console.log("Component Destroyed");
  }
}//end
