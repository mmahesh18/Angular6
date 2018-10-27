import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import {StockComponent} from './inputbinding';
import {OrderComponent} from './ordercomponent';
import {SMSComponent} from  './smscomponent';
import {TimerComponent} from './timercomponent';

import {PriceQuoterComponent,OutputComponent,
            MailComponent} from './outputbinding'
@NgModule({
  imports:      [CommonModule,FormsModule],
  declarations: [     
                      StockComponent,
                      OrderComponent,
                      SMSComponent,
                      TimerComponent,     

                      PriceQuoterComponent,
                      OutputComponent,
                      MailComponent 
                ],
  exports:      [   
                     StockComponent,
                     OutputComponent                                      
                    ]                    
})
export class IOModule { }





