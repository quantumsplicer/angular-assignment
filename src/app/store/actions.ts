import { createAction, props } from '@ngrx/store';
import { componentType } from './reducers';

export const changeComp = createAction(
  '[App] Change Current Component',
  props<{ name: string }>()
);
export const changeProps = createAction(
  '[App] Change Component Properties',
  props<componentType>()
);
export const changeAllProps = createAction(
  '[App] Change All Components',
  props<{ props: componentType[] }>()
);
export const submitFunc = createAction(
  '[App] Submit All Components',
  props<{ func: string }>()
);
