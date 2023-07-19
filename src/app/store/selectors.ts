import { createSelector } from '@ngrx/store';

export const selectFeature = (state: any) => state.newFeature;

export const selectCurrentComp = createSelector(
  selectFeature,
  (state: any) => state.selectedComponent
);

export const selectCompProps = createSelector(
  selectFeature,
  (state: any) => state.componentProps
)

export const selectTempProps = createSelector(
  selectFeature,
  (state: any) => state.tempProps
)
