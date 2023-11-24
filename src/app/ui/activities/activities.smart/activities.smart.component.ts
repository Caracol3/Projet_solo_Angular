import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesService } from 'src/app/data_access/activities/activities.service';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'smartActivities',
  templateUrl: './activities.smart.component.html',
  styleUrls: ['./activities.smart.component.scss'],
})
export class ActivitiesSmartComponent implements OnInit {
  activities: Activity[] = [];
  allActivities: Activity[] = [];

  constructor(private activitiesService: ActivitiesService,
    private router: Router) {}

  ngOnInit(): void {
    this.activitiesService.getActivities().subscribe(
      (activities) => {
        this.activities = activities;
        this.allActivities = activities;
      },
      (error) => {
        console.error('Error getting all activities', error);
      }
    );
  }

  searchActivities(searchTerm: string): void {
    if (!searchTerm) {
      this.activities = this.allActivities;
    } else {
      this.activities = this.allActivities.filter(
        (activity) =>
          activity.title.toLowerCase().includes(searchTerm.toLowerCase())

          // ||
          // activity.description.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        console.log(this.activities);
  }

  filterActivities(ageValue: string): void {
    const age = Number(ageValue);
    if (!isNaN(age)) {
      this.activities = this.allActivities.filter(
        (activity) => activity.recommendedAge === age
      );
    }
  }

  onSelectedActivity(activityId: number) {
    this.router.navigate(['/activities/activity', activityId]);
    console.log(activityId);
  }
}

