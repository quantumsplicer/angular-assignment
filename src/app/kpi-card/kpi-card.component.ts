import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
})
export class KpiCardComponent{
  @Input() id!: string;
  @Input() value!: string;
  @Input() title!: string;
  @Input() postfix!: string;
  @Input() prefix!: string;

  public result = 10;
  public divWidth!: string;
  public divHeight!: string;
  public diffValue = null;

}
