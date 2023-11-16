import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivitiesSmartComponent } from './ui/activities/activities.smart/activities.smart.component';
import { ActivitiesDumbComponent } from './ui/activities/activities.dumb/activities.dumb.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from './layout/header/header.component';
import { MenuModule } from 'primeng/menu';
import { ToastModule} from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    ActivitiesSmartComponent,
    ActivitiesDumbComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    MenuModule,
    ToastModule,
    FormsModule,
  
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
