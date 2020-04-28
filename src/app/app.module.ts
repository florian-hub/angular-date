import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';



@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MglTimelineModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
