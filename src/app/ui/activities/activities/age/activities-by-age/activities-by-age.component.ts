import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/data_access/activities/activities.service';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-activities-by-age',
  templateUrl: './activities-by-age.component.html',
  styleUrls: ['./activities-by-age.component.scss'],
})
export class ActivitiesByAgeComponent implements OnInit {
  activities: Activity[] = [];
  allActivities: Activity[] = [];

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.loadAllActivities();
  }

  loadAllActivities(): void {
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

  filterByAge(age: number): void {
    this.activities = this.allActivities.filter(
      (activity) => activity.recommendedAge === age
    );
  }

  searchActivities(searchTerm: string): void {
    if (!searchTerm) {
      this.activities = this.allActivities;
    } else {
      this.activities = this.allActivities.filter(
        (activity) =>
          activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          activity.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  filterActivities(ageValue: string): void {
    const age = Number(ageValue);
    if (!isNaN(age)) {
      this.activities = this.allActivities.filter(
        (activity) => activity.recommendedAge === age
      );
    }
  }
}
