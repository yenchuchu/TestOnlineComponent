import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DataService } from './data.service';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports: [ 
	  BrowserModule,
	  HttpModule,
    JsonpModule 
    ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
   DataService
  ]
})
export class AppModule { }
