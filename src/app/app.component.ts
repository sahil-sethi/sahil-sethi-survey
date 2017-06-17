// Core Required Module(s): Component
import { Component } from '@angular/core';

// Importing the Web API Service
import { MyWebAPIService } from './mywebapi.service';

// Component Decorator: Selector, HTML, CSS
@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})

// Exporting the AppComponent class
export class AppComponent {

	// Initial Property & Type Declarations 
  	title: string = "Web Developer Skills Assessment";

  	// Constructor with initialization of the Transporter Service
  	constructor (private mywebapiservice: MyWebAPIService) {}

}
