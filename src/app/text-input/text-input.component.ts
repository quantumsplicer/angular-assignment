import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AllActions from '../store/actions';
import { selectCompProps, selectCurrentComp, selectTempProps } from '../store/selectors';
import { componentType } from '../store/reducers';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() id!: string;
  @Input() placeholder!: string;

  public display = true;
  public value: number = 0;
  public selectedComponent: any;
  componentProps: any;

  onChange(e: any) {
    this.value = e.target.value
    let val = e.target.value
    if (this.selectedComponent.includes('Donut') || this.selectedComponent.includes('Graph')) val = Number(val)
    let newComp = {...this.componentProps}
    if(this.id == 'width'){
      newComp.width = val as number
    } else if (this.id == 'height'){
      newComp.height = val as number
    }
    this.componentProps = newComp
    this.store.dispatch(AllActions.changeProps(newComp));
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectCurrentComp).subscribe((component) => {
      this.selectedComponent = component;
      
      this.value = 0;
    });
    this.store.select(selectTempProps).subscribe((component) => {
      component.map((item: componentType) => {
        if ((this.selectedComponent == item.name)) {
          this.componentProps = item;
        }
      });
    });
  }
}
