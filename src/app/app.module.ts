import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivitiesSmartComponent } from './ui/activities/activities.smart/activities.smart.component';
import { ActivitiesDumbComponent } from './ui/activities/activities.dumb/activities.dumb.component';



@NgModule({
  declarations: [
    AppComponent,
    ActivitiesSmartComponent,
    ActivitiesDumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
