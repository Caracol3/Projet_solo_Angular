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
import { HomeComponent } from './layout/home/home.component';
import { AccordionModule } from 'primeng/accordion';
import { GalleriaModule } from 'primeng/galleria';
import { FamiliesSmartComponent } from './ui/families/families.smart/families.smart/families.smart.component';
import { FamiliesDumbComponent } from './ui/families/families.dumb/families.dumb/families.dumb.component';
import { ChildrenDumbComponent } from './ui/children/children.dumb/children.dumb/children.dumb.component';
import { ChildrenSmartComponent } from './ui/children/children.smart/children.smart/children.smart.component';
import { EvaluationsSmartComponent } from './ui/evaluations/evaluations.smart/evaluations.smart/evaluations.smart.component';
import { EvaluationsDumbComponent } from './ui/evaluations/evaluations.dumb/evaluations.dumb/evaluations.dumb.component';
import { SingleActivitySmartComponent } from './ui/activities/singleActivity.smart/single-activity.smart/single-activity.smart.component';
import { SingleActivityDumbComponent } from './ui/activities/singleActivity.dumb/single-activity.dumb/single-activity.dumb.component';
import { ActivityByIdSmartComponent } from './ui/activities/activities.smart/activity-by-id-smart/activity-by-id-smart.component';
import { ColoringSmartComponent } from './ui/activities/activities.smart/coloring/coloring.smart/coloring.smart.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivitiesSmartComponent,
    ActivitiesDumbComponent,
    HeaderComponent,
    HomeComponent,
    FamiliesSmartComponent,
    FamiliesDumbComponent,
    ChildrenDumbComponent,
    ChildrenSmartComponent,
    EvaluationsSmartComponent,
    EvaluationsDumbComponent,
    SingleActivitySmartComponent,
    SingleActivityDumbComponent,
    ActivityByIdSmartComponent,
    ColoringSmartComponent,
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
    AccordionModule,
    GalleriaModule

  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
