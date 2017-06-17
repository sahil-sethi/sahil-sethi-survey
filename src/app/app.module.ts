// Core Required Module(s): BrowserModule, NgModule, FormsModule, HttpModule, JsonpModule, AppRoutingModule
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Importing Components: AppComponent, SurveyComponent, ThankYouComponent
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey.component';
import { ThankYouComponent } from './thankyou.component';

// Importing Service: MyWebAPIService
import { MyWebAPIService } from './mywebapi.service';

// NgModule Decorator: Declarations, Imports, Providers, Bootstrap
@NgModule({
  // Adding components to the list of declarations recognized by the app
  declarations: [
    AppComponent,
    SurveyComponent,
    ThankYouComponent
  ],
  // Importing all the required modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  // Making the Web API Service available across the app
  providers: [ MyWebAPIService ],
  // Bootstrapping the root AppComponent
  bootstrap: [ AppComponent ]
})

// Exporting the AppModule class
export class AppModule {}
