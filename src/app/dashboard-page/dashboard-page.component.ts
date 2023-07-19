import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { selectCompProps, selectCurrentComp } from '../store/selectors';
import { componentType } from '../store/reducers';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  public cols: number = 4;
  @Input() chartCols!: number;

  public donutChartOptions1 = {
    chart: {
      type: 'pie',
      plotShadow: false,
      height: 400,
      width: 500,
      margin: 10,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 30,
        borderColor: null,
        slicedOffset: 0,
        height: 400,
        width: 500,
        margin: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: '$ 6,000.00',
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'a', y: 1, color: '#eeeeee' },
          { name: 'b', y: 2, color: '#2D82B7' },
          { name: 'c', y: 3, color: '#42E2B8' },
          { name: 'd', y: 4, color: '#ADE1E5' },
          { name: 'e', y: 5, color: '#EB8A90' },
        ],
      },
    ],
  };

  public donutChartOptions2 = {
    chart: {
      type: 'pie',
      plotShadow: false,
      height: 400,
      width: 500,
      margin: 10,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 30,
        borderColor: null,
        slicedOffset: 0,
        height: 400,
        width: 500,
        margin: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: '$ 9,999.00',
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'a', y: 1, color: '#DEE5E5' },
          { name: 'b', y: 2, color: '#9DC5BB' },
          { name: 'c', y: 3, color: '#17B890' },
          { name: 'd', y: 4, color: '#5E807F' },
          { name: 'e', y: 5, color: '#045D66' },
        ],
      },
    ],
  };

  public barChartOptions = {
    chart: {
      type: 'bar',
      height: 400,
      width: 1065,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Bar',
    },
    yAxis: {
      visible: false,
      gridLineColor: '#fff',
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      lineColor: '#fff',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    plotOptions: {
      series: {
        borderRadius: 5,
      } as any,
    },
    series: [
      {
        type: 'bar',
        color: '#506ef9',
        data: [
          { y: 20.9 },
          { y: 71.5 },
          { y: 106.4 },
          { y: 129.2 },
          { y: 144.0, color: '#ffe8df' },
          { y: 176.0 },
          { y: 135.6 },
          { y: 148.5 },
          { y: 216.4, color: '#fc5185' },
          { y: 194.1 },
          { y: 95.6 },
          { y: 54.4 },
        ],
      },
    ],
  };

  public cards = [];
  public KPICards = [
    {
      id: 'Card 1',
      title: 'COHORT POPULATION',
      query: { measures: ['Orders.count'] },
      difference: 'Orders',
      progress: false,
      duration: 2.25,
      prefix: '',
      postfix: '',
      value: '230,000',
    },
    {
      id: 'Card 2',
      title: 'POPULATION EFFECTED',
      query: { measures: ['Users.count'] },
      difference: 'Users',
      progress: false,
      duration: 2.5,
      prefix: '',
      postfix: '%',
      value: '59',
    },
    {
      id: 'Card 3',
      title: 'TOTAL COST PER PERSON',
      query: { measures: ['Orders.percentOfCompletedOrders'] },
      difference: false,
      progress: true,
      duration: 2.75,
      prefix: '₹',
      postfix: '',
      value: '498',
    },
    {
      id: 'Card 4',
      title: 'EXPECTED POPULATION BY EOY',
      query: { measures: ['LineItems.price'] },
      difference: false,
      progress: false,
      duration: 3.25,
      prefix: '',
      postfix: '',
      value: '298,000',
    },
  ];

  constructor(private store: Store) {}

  public UpperDonut!: string;

  changeProps(obj: componentType[]) {
    let newOptions;
    newOptions = { ...this.donutChartOptions1 };
    newOptions.chart.width = obj[4].width as number;
    newOptions.chart.height = obj[4].height as number;
    this.donutChartOptions1 = newOptions;

    newOptions = { ...this.donutChartOptions2 };
    newOptions.chart.width = obj[5].width as number;
    newOptions.chart.height = obj[5].height as number;
    this.donutChartOptions2 = newOptions;

    newOptions = { ...this.barChartOptions };
    newOptions.chart.width = obj[6].width as number;
    newOptions.chart.height = obj[6].height as number;
    this.barChartOptions = newOptions;
  }

  changeCardPosition(obj: componentType[]) {
    let newKPICards: any[] = [];
    obj.map((item) => {
      this.KPICards.map((value) => {
        if (value.id == item.name) {
          newKPICards.push(value);
        }
      });
    });
    this.KPICards = newKPICards;
    console.log(this.KPICards);
  }

  changeDonutPosition(obj: componentType[]) {
    if (!this.UpperDonut) this.UpperDonut = obj[4].name;
    console.log(this.UpperDonut, obj[4].name, 'qwertyuivvs');
    if (this.UpperDonut != obj[4].name) {
      let temp = this.donutChartOptions1;
      this.donutChartOptions1 = this.donutChartOptions2;
      this.donutChartOptions2 = temp;
      this.UpperDonut = obj[4].name;
    }
  }

  ngOnInit() {
    this.store.select(selectCompProps).subscribe((item) => {
      this.changeCardPosition(item);
      this.changeDonutPosition(item);
      this.changeProps(item);
    });
  }
}
