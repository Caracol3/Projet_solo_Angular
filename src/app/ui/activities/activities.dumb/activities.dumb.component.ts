import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Activity } from 'src/app/model/activity.model';

@Component({
  selector: 'dumbActivities',
  templateUrl: './activities.dumb.component.html',
  styleUrls: ['./activities.dumb.component.scss'],
})
export class ActivitiesDumbComponent {
  @Input()
  activity!: Activity;

  

}
