import {Component } from '@angular/core';
//StockComponent
@Component({
    selector: 'app-stock',
    template: `
    <div class="text-left">
    <h1 class="bg-info">Stock Exchange</h1>
    <input type="text"  placeholder="Enter stock (e.g : Bank of America)"  
      (change)="onInputEvent($event)"/>
    <br/>   
    
    <div>Stock Info :{{stock}}</div>

    <order-processor  [stockSymbol]="stock" quantity="100">
       </order-processor>
</div>

     <timer-comp></timer-comp>
  `
})
//Parent component
export class StockComponent {
    stock:string;
    
    // this is event.target.value in  javascript
    onInputEvent({target}:any):void{
        this.stock=target.value;//morgan
    }
}

