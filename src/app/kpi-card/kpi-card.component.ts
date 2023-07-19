import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCompProps, selectCurrentComp } from '../store/selectors';
import { DropDownDataProps } from '../app.component';
import { componentType } from '../store/reducers';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
})
export class KpiCardComponent implements OnInit, OnChanges{
  @Input() id!: string;
  @Input() value!: string;
  @Input() title!: string;
  @Input() postfix!: string;
  @Input() prefix!: string;

  public result = 10;
  public divWidth!: string;
  public divHeight!: string;
  public diffValue = null;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.store.select(selectCompProps).subscribe((item) => {
    //   console.log(item)
    //   item.map((obj: componentType) => {
    //     if (obj.name == this.id) {
    //       console.log(obj.name, obj.width, obj.height)
    //       this.divWidth = obj.width as string + 'px';
    //       this.divHeight = obj.height as string + 'px';
    //     }
    //   });
    // });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.store.select(selectCompProps).subscribe((item) => {
      console.log(item)
      item.map((obj: componentType) => {
        if (obj.name == this.id) {
          console.log(obj.name, obj.width, obj.height)
          this.divWidth = obj.width as string + 'px';
          this.divHeight = obj.height as string + 'px';
        }
      });
    });
  }
}
