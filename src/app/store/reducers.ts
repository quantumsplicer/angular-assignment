import { createReducer, on } from '@ngrx/store';
import * as AllActions from './actions';

export type componentType = {
  name: string;
  width: string | number;
  height: string | number;
};

export interface StateType {
  selectedComponent: string;
  componentProps: componentType[];
  tempProps: componentType[];
}

export const initialState: StateType = {
  selectedComponent: 'Card 1',
  componentProps: [
    {
      name: 'Card 1',
      width: '250',
      height: '131',
    },
    {
      name: 'Card 2',
      width: '250',
      height: '131',
    },
    {
      name: 'Card 3',
      width: '250',
      height: '131',
    },
    {
      name: 'Card 4',
      width: '250',
      height: '131',
    },
    {
      name: 'Donut 1',
      width: 500,
      height: 400,
    },
    {
      name: 'Donut 2',
      width: 500,
      height: 400,
    },
    {
      name: 'Graph 1',
      width: 1065,
      height: 400,
    },
  ],
  tempProps: [
    {
      name: 'Card 1',
      width: '250',
      height: '131',
    },
    {
      name: 'Card 2',
      width: '250',
      height: '131',
    },
    {
      name: 'Card 3',
      width: '250',
      height: '131',
    },
    {
      name: 'Card 4',
      width: '250',
      height: '131',
    },
    {
      name: 'Donut 1',
      width: 500,
      height: 400,
    },
    {
      name: 'Donut 2',
      width: 500,
      height: 400,
    },
    {
      name: 'Graph 1',
      width: 1065,
      height: 400,
    },
  ],
};

export const reducers = createReducer(
  initialState,
  on(AllActions.changeComp, (state, props) => {
    return {
      ...state,
      selectedComponent: props.name,
    };
  }),
  on(AllActions.changeProps, (state, props) => {
    let newArr = state.tempProps.map((item) => {
      let newProps = item as componentType;
      if (props.name == item.name) {
        newProps = props;
      }
      return newProps;
    });
    return {
      ...state,
      tempProps: newArr,
    };
  }),
  on(AllActions.changeAllProps, (state, props) => {
    return {
      ...state,
      tempProps: props.props,
    };
  }),
  on(AllActions.submitFunc, (state, props) => {
    if (props.func === 'changeAll') {
      console.log(state.componentProps, state.tempProps)
      return {
        ...state,
        componentProps: state.tempProps,
      };
    } else {
      let newCompProps = [...state.componentProps];
      state.componentProps.map((item, index) => {
        if (item.name == state.selectedComponent) {
          newCompProps[index] = state.tempProps[index];
        }
      });
      return {
        ...state,
        componentProps: newCompProps,
      };
    }
  })
);
