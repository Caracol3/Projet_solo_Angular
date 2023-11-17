import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from 'src/app/data_access/activities/activities.service';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-single-activity.smart',
  templateUrl: './single-activity.smart.component.html',
  styleUrls: ['./single-activity.smart.component.scss']
})
export class SingleActivitySmartComponent implements OnInit{

  activities: Activity[] = [];
  
  constructor(
    private activitiesService: ActivitiesService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('categoryId');
      if (categoryId) {
        this.activitiesService.getActivitiesByCategory(+categoryId).subscribe((activities) => {
          this.activities = activities;
          console.log(this.activities);
        });
      } else {
        console.error('Category ID is null');

      }
    });
  }

}
