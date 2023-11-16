import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/data_access/activities.service';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'smartActivities',
  templateUrl: './activities.smart.component.html',
  styleUrls: ['./activities.smart.component.scss'],
})
export class ActivitiesSmartComponent implements OnInit {
  activities: Activity[] = [];
  demonstrationOfLove: string = '';

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.activitiesService.getActivities().subscribe((activities) => {
      this.activities = activities;
      console.log(this.activities);
    });
  }
}
