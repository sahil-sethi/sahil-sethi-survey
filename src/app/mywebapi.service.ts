// Core Required Module(s): Injectable, Jsonp, URLSearchParams
import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// Injectable Decorator
@Injectable()

// Exporting the MyWebAPIService class
export class MyWebAPIService {

    // Initial Property & Type Declarations 
    body: string;

    // Constructor with initialization of the JSONp module
    constructor(private jsonp: Jsonp) {}

    // Method to get the data from the database
    getList(): Promise<any> {

      // Local variables to store the API URL, personal project key, and URLSearchParams
      let apiUrl: string = '';
      let key: string = '';    
      let params = new URLSearchParams();

      // Setting the URLSearchParams: Action, Ref, Format, Callback
      params.set('action', 'fetch');
      params.set('ref', key);
      params.set('format', 'json');
      params.set('callback', 'JSONP_CALLBACK');

      // Return an Observable string
      return this.jsonp
              // Performing an HTTP get call with the API URL and URLSearchParams
              .get(apiUrl, {search: params})
              .map(response => <string[]> response.json()).toPromise();
    }

    // Method to insert data into the database, accepting the body as a parameter
    putResponse(body:string): Promise<any> {

      // Local variables to store the API URL, personal project key, and URLSearchParams
      let apiUrl: string = '';
      let key: string = '';   
      let params = new URLSearchParams();

      // Setting the URLSearchParams: Action, Ref, Fkey, Body, Format, Callback
      params.set('action', 'push');
      params.set('ref', key);
      params.set('fkey', key);
      params.set('body', body);
      params.set('format', 'json');
      params.set('callback', 'JSONP_CALLBACK');

      // Return an Observable string
      return this.jsonp
                    // Performing an HTTP get call with the API URL and URLSearchParams
                    .get(apiUrl, {search: params}).toPromise().then(console.log);
    }

}