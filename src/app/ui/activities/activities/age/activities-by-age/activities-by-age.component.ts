import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/data_access/activities/activities.service';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-activities-by-age',
  templateUrl: './activities-by-age.component.html',
  styleUrls: ['./activities-by-age.component.scss']
})
export class ActivitiesByAgeComponent implements OnInit{

activities: Activity  [] = [];

constructor(private activitiesService: ActivitiesService) { }

  ngOnInit(): void {
  }

  filterByAge(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const age = Number(inputElement.value);
    this.activitiesService.getActivitiesByAge(age).subscribe(
      (activities) => {
        this.activities = activities;
      },
      (error) => {
        console.error('Error getting activities by age', error);
      }
    );
  }


}
