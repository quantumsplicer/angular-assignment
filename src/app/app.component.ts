import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentComp } from './store/selectors';

export type DropDownDataProps = {
  value: string | number;
  viewValue: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Dashboard Assignment';
  public links = [
    { name: 'Dashboard', href: '/', icon: 'dashboard' },
    { name: 'Orders', href: '/table', icon: 'assignment' },
  ];

  public AllComponents: DropDownDataProps[] = [
    { value: 'Card 1', viewValue: 'Card 1' },
    { value: 'Card 2', viewValue: 'Card 2' },
    { value: 'Card 3', viewValue: 'Card 3' },
    { value: 'Card 4', viewValue: 'Card 4' },
    { value: 'Donut 1', viewValue: 'Donut 1' },
    { value: 'Donut 2', viewValue: 'Donut 2' },
    { value: 'Graph 1', viewValue: 'Graph 1' },
  ];

  public CardPosData: DropDownDataProps[] = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
  ];

  public DonutPosData: DropDownDataProps[] = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
  ];

  public GraphPosData: DropDownDataProps[] = [{ value: 1, viewValue: '1' }];

  public posData!: DropDownDataProps[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectCurrentComp).subscribe((component) => {
      this.AllComponents.map((item, index)=>{
        if(item.value === component){
          if (index <= 3) this.posData = this.CardPosData
          else if (index > 3 && index <=5) this.posData = this.DonutPosData
          else if (index > 5) this.posData = this.GraphPosData
        }
      })
    });
  }
}
