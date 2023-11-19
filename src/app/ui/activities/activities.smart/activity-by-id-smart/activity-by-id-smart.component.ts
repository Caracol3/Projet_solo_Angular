import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from 'src/app/data_access/activities/activities.service';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-activity-by-id-smart',
  templateUrl: './activity-by-id-smart.component.html',
  styleUrls: ['./activity-by-id-smart.component.scss'],
})
export class ActivityByIdSmartComponent implements OnInit {

  activity: Activity | null = null;

  constructor(
    private activitiesService: ActivitiesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const activityId = params.get('activityId');
      if (activityId) {
        this.activitiesService
          .getActivityById(+activityId)
          .subscribe((activity) => {
            this.activity = activity;
            console.log( "l'activité choisit est : "+ activity);
          });
      } else {
        console.error('Activity ID is null');
      }
    });
  }
}
