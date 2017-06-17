// Core Required Module(s): Component, Observable, Router
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

// Importing the Web API Service
import { MyWebAPIService } from './mywebapi.service';

// Component Decorator: Selector, HTML, CSS
@Component({
    selector: 'survey-component',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})

// Exporting the SurveyComponent class
export class SurveyComponent {

    // Initial Property & Type Declarations 

    // Flag to track form submission, initialization to false
    submitted: boolean = false;
    body: any = {};
    name: string = "";
    email: string = "";
    github: string = "";
    stackoverflow: string = "";
    twitter: string = "";
    html: number = 0;
    css: number = 0;
    javascript: number = 0;
    ecmascript: string = "";
    frameworks: any = [];
    taskrunners: any = [];
    versioncontroltools: any = [];
    packagemanagers: any = [];

    // Constructor with initialization of the Web API Service
    constructor (private mywebapiservice: MyWebAPIService) {}

    // Method for form submit event
    onSubmit(): void {

      // Setting the form as submitted, assigning the flag to true
      this.submitted = true;

      // Setting up the body with all required properties from the form input
      this.body = {
        name: this.name, 
        email: this.email, 
        github: this.github, 
        stackoverflow: this.stackoverflow, 
        twitter: this.twitter, 
        html: this.html, 
        css: this.css, 
        javascript: this.javascript, 
        ecmascript: this.ecmascript,
        frameworks: this.frameworks,
        taskrunners: this.taskrunners,
        versioncontroltools: this.versioncontroltools,
        packagemanagers: this.packagemanagers
      };

      // Call the putResponse method on the Web API Service and subscribe to the Promise response
      this.mywebapiservice.putResponse(JSON.stringify(this.body));
      
    }

    // Method to build objects for the checked tool categories, with the event as a parameter
    toolObjectBuilder($event) {

      // Local variables to store target checked flag, tool type, and value
      let isChecked = $event.target.checked;
      let toolType = $event.target.dataset.toolType;
      let value = $event.target.value;

      // Check if the target checkbox is checked
      if(isChecked) {
        // Check the tool type and push the value to the appropriate property
        if(toolType == 'framework') {
          this.frameworks.push(value);
        } else if(toolType == 'taskrunner') {
          this.taskrunners.push(value);
        } else if(toolType == 'versioncontroltool') {
          this.versioncontroltools.push(value);
        } else if(toolType == 'packagemanager') {
          this.packagemanagers.push(value);
        }
      // If the target checkbox is not checked
      } else {

        if(toolType == 'framework') {
          
          this.frameworks = this.frameworks.filter(item => {
            if(item != value) return item;
          });

        } else if (toolType == 'taskrunner') {
          
          this.taskrunners = this.taskrunners.filter(item => {
            if(item != value) return item;
          });

        } else if (toolType == 'versioncontroltool') {
          
          this.versioncontroltools = this.versioncontroltools.filter(item => {  
            if(item != value) return item;
          });

        } else if (toolType == 'packagemanager') {
          
          this.packagemanagers = this.packagemanagers.filter(item => {   
            if(item != value) return item;
          });

        }

      }

    }

}
