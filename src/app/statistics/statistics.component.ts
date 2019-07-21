import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatisticsComponent implements OnInit {
  @Input() total: number;
  @Input() completed: number;
  @Input() notCompleted: number;

  constructor() { }

  ngOnInit() {
    
  }
}
