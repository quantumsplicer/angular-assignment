import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit, OnChanges {
  @Input() chartProperties!: Object;
  @Input() id!: Object;

  constructor() {}

  public chart: any;

  ngOnInit() {
    this.chart = new Chart(this.chartProperties as any);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.chart = new Chart(changes['chartProperties'].currentValue as any);
  }
}
