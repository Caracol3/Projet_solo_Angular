import { Component, Input } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'dumbActivities',
  templateUrl: './activities.dumb.component.html',
  styleUrls: ['./activities.dumb.component.scss'],
})
export class ActivitiesDumbComponent {
  @Input()
  activity!: Activity;

  
}
