import { Component, Input, OnInit } from '@angular/core';
import * as AllActions from '../store/actions';
import { Store } from '@ngrx/store';
import { DropDownDataProps } from '../app.component';
import { selectCurrentComp, selectTempProps } from '../store/selectors';
import { componentType } from '../store/reducers';

@Component({
  selector: 'app-drop-down-input',
  templateUrl: './drop-down-input.component.html',
  styleUrls: ['./drop-down-input.component.scss'],
})
export class DropDownInputComponent implements OnInit {
  @Input() id!: string;
  @Input() data!: DropDownDataProps[];

  public allComponentProps: any;
  public currentCompIndex!: number;
  public selectedComponent: any;

  onChange(e: any) {
    console.log(this.selectedComponent)
    if (this.id == 'component'){
    console.log(e.target.value, this.selectedComponent)
      this.store.dispatch(AllActions.changeComp({ name: e.target.value }));
    }
    else if (this.id == 'position') {
      let index = Number(e.target.value);
      if (this.selectedComponent.includes('Donut')) {
        index = index + 4;
      } else if (this.selectedComponent.includes('Graph')) {
        index = index + 6;
      }
      let newComp = [...this.allComponentProps];
      let temp: componentType = newComp[index - 1];
      console.log(index, this.currentCompIndex)
      newComp[index - 1] = newComp[this.currentCompIndex];
      newComp[this.currentCompIndex] = temp;
      console.log(newComp);
      this.store.dispatch(AllActions.changeAllProps({ props: newComp }));
    }
    // this.store.dispatch(AllActions.changeProps({name:e.target.value}))
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectCurrentComp).subscribe((component) => {
      console.log(component)
      this.selectedComponent = component;
      if (this.allComponentProps) {
        this.allComponentProps.map((item: componentType, index: number) => {
          if (this.selectedComponent == item.name) {
            this.currentCompIndex = index;
          }
        });
      }
    });
    this.store.select(selectTempProps).subscribe((component) => {
      this.allComponentProps = component;
      component.map((item: componentType, index: number) => {
        if (this.selectedComponent == item.name) {
          console.log(this.selectedComponent)
          this.currentCompIndex = index;
        }
      });
    });
  }
}
