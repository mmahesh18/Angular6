import {Component,Input} from '@angular/core';
@Component({
	selector:'sms-text',
	template:`
	<h3 class="bg-success">		
	  Stock Information from child SMS component</h3>
	<h2 class="text-success container">
		Sent SMS about {{stock}} 
	</h2>
	`
})
export class SMSComponent{
	@Input()
	stock:string
}

