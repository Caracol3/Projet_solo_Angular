import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../../models/activity.model';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {

  private APIurl = 'http://localhost:8080';

  activities: Activity[] = [];

  constructor(private httpClient: HttpClient) {}


  getActivities(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.APIurl + '/activity');
  }

  getActivitiesByCategory(categoryId: number): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.APIurl + '/activity/category/' + categoryId);
  }

  getAllColoring(categoryId: number): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.APIurl + '/activity/category/' + 3);
  }

  getActivityById(activityId: number): Observable<Activity> {
    return this.httpClient.get<Activity>(this.APIurl + '/activity/' + activityId);
  }

  getActivitiesByAge(age:number): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.APIurl + '/activity/age/' + age);
  }

}
