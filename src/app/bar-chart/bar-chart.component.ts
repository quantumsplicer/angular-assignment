import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { formatDate, registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { Chart } from 'angular-highcharts';
// import { Options} from 'highcharts';

registerLocaleData(localeEn);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() chartOptions!: Object;
  constructor() {}

  public chart: any;

  ngOnInit() {
    this.chart = new Chart(this.chartOptions)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.chart = new Chart(changes['chartOptions'].currentValue as any);
  }
}
