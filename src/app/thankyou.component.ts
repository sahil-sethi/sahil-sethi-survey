// Core Required Module(s): Component, OnInit
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

// Importing the Web API Service
import { MyWebAPIService } from './mywebapi.service';

// Component Decorator: Selector, HTML, CSS
@Component({
    selector: 'thankyou-component',
    templateUrl: './thankyou.component.html',
    styleUrls: ['./thankyou.component.css']
})

// Exporting the ThankYouComponent class that implements the OnInit Lifecycle Hook
export class ThankYouComponent implements OnInit {

    // Initial Property & Type Declarations 
    data: any[] = [];
    html: any[] = [];
    css: any[] = [];
    javascript: any[] = [];
    ecmascript: any[] = [];

    htmlavg: any;
    cssavg: any;
    javascriptavg: any;
    ecmascripttrue: any[] = [];
    ecmascriptpercentage: any;

    metricflag: boolean = false;

    // Constructor with initialization of the Web API Service
    constructor (private mywebapiservice: MyWebAPIService) {}

    // ngOnInit Lifecycle Hook method
    ngOnInit(): void {
      // Subscribe to data from the Web API Service
      this.mywebapiservice.getList().then(data => { 
        return this.data = this.jsonParser(data).reverse();
      }).then(parsedData => {
        this.grabMetricData();
      });
    } 

    jsonParser(data:any): any {
      return data.map(item => {
        return JSON.parse(item.body);
      });
    }

    grabMetricData(): void {
      this.data.forEach(item => {

        if (!("undefined" === typeof item.html)) {
          this.html.push(item.html);
        }

        if (!("undefined" === typeof item.css)) {
          this.css.push(item.css);
        }

        if (!("undefined" === typeof item.javascript)) {
          this.javascript.push(item.javascript);
        }

        if ((item.ecmascript != "") && !("undefined" === typeof item.ecmascript)) {
          this.ecmascript.push(item.ecmascript);
          console.log(this.ecmascript.length);
          this.ecmascripttrue = this.ecmascript.filter(response => {
            if(response === "true") return response;
          })
        }

      });

      this.htmlavg = d3.mean(this.html).toFixed(2);
      this.cssavg = d3.mean(this.css).toFixed(2);
      this.javascriptavg = d3.mean(this.javascript).toFixed(2);

      //this.htmlavg = (this.html.reduce(add, 0)/this.html.length).toFixed(2);
      //this.cssavg = (this.css.reduce(add, 0)/this.css.length).toFixed(2);
      //this.javascriptavg = (this.javascript.reduce(add, 0)/this.javascript.length).toFixed(2);
      //this.ecmascriptpercentage = ((this.ecmascripttrue.length/this.ecmascript.length)*100).toFixed(1);

      /* function add(a, b) {
        return a + b;
      } */

      console.log(this.htmlavg, this.cssavg, this.javascriptavg, this.ecmascript, this.ecmascripttrue.length, this.ecmascript.length, this.ecmascriptpercentage);

    }

    metricDisplay() {
      if(this.metricflag === true) {
        this.metricflag = false;
      } else {
        this.metricflag = true;
      }
    }

}
