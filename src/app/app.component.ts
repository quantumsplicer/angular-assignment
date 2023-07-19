import { Component } from '@angular/core';

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
  public posData!: DropDownDataProps[];

}
