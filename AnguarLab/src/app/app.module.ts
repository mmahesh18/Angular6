import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

// for web component
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

import { StartComponent } from './start/start.component';
import { BindingComponent } from './binding/binding.component';
import { NestedComponent } from './binding/nested.component';
import { IOModule } from './input-output/input-output.module';
import { ViewChildParentComponent } from './viewchild/viewchildparent.component';
import { ViewChildComponent } from './viewchild/viewchild.component';
import { DIModule } from './di/di.module';
import { TemplateRefComponent } from './viewchild/templateref.component';
import { CompLifeCycleComponent, ChildComponent } from './complifecycle/comlifecycle.component';
import {DynamicComponent} from './dynamic/dynamic.component'
import { Service } from './dynamic/serviceLoader';

import { ContactModule } from './multicomp/contact.module';

@NgModule({
  declarations: [
    AppComponent, StartComponent,BindingComponent,
    NestedComponent,ViewChildParentComponent,
    ViewChildComponent,TemplateRefComponent,
    CompLifeCycleComponent,ChildComponent,
    DynamicComponent

  ],
  imports: [
    BrowserModule, FormsModule,IOModule,DIModule,
    ContactModule


  ],
  providers: [Service],  
  entryComponents: [DynamicComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
 
