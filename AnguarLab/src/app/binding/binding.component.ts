import {Component} from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html'
})

export class BindingComponent {

    clicked:boolean = false;
    // JSON collection
    items:any = [
                     {name: 'Kendo UI'},
                     {name: 'Ext JS'},
                     {name: 'Angular JS'},
                     {name: 'Ember JS'}
                  ];

     public clickedItem:any = {name: ''}; // property/field
     //method
    
     // method - event handlers - functions
     onItemClicked(item: any) {
        this.clickedItem = item;
        this.clicked = true;
     }
}




