import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  private APIurl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  activities: Activity[] = [];

  getActivities(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.APIurl + '/activity');
  }
}
