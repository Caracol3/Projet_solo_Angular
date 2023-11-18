import { Component, Input } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'dumb-single-activity',
  templateUrl: './single-activity.dumb.component.html',
  styleUrls: ['./single-activity.dumb.component.scss']
})
export class SingleActivityDumbComponent {

  @Input()
  activity!: Activity

}
