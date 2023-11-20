import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from 'src/app/data_access/activities/activities.service';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-coloring-smart',
  templateUrl: './coloring.smart.component.html',
  styleUrls: ['./coloring.smart.component.scss'],
})
export class ColoringSmartComponent implements OnInit {
  activities: Activity[] = [];
  activityImages: any[] = [];
  activeIndex: number = 0;
  responsiveOptions: any[] | undefined;

  constructor(
    private activitiesService: ActivitiesService,
    private route: ActivatedRoute) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 5,
        numScroll: 1,
      },
    ];
    }

    ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        const categoryId = params.get('categoryId');
        if (categoryId) {
          this.activitiesService
            .getAllColoring(+categoryId)
            .subscribe((activities) => {
              this.activities = activities;
              this.activityImages = this.activities.map(activity => ({
                itemImageSrc: activity.image,
                thumbnailImageSrc: activity.image

              }));

            });
          } else {
            console.error('Category ID is null');
          }
        });
        console.log(this.activityImages);
      }
  }
