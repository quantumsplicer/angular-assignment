import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AllActions from '../store/actions';

@Component({
  selector: 'app-apply-button',
  templateUrl: './apply-button.component.html',
  styleUrls: ['./apply-button.component.scss']
})
export class ApplyButtonComponent {

  constructor(private store: Store) {}

  applyChanges () {
    this.store.dispatch(AllActions.submitFunc({func: 'changeAll'}))
  }
}
