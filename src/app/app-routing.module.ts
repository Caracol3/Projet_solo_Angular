import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ActivitiesSmartComponent } from './ui/activities/activities.smart/activities.smart.component';
import { FamiliesSmartComponent } from './ui/families/families.smart/families.smart/families.smart.component';
import { ChildrenSmartComponent } from './ui/children/children.smart/children.smart/children.smart.component';
import { EvaluationsSmartComponent } from './ui/evaluations/evaluations.smart/evaluations.smart/evaluations.smart.component';


const routes: Routes = [
  { path: 'activities', component: ActivitiesSmartComponent },
  { path: 'families', component: FamiliesSmartComponent },
  { path: 'children', component: ChildrenSmartComponent },
  { path: 'evaluations', component: EvaluationsSmartComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
