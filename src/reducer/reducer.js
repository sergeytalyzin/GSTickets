import {data} from "../mocks/mocks";
import {sortAndFilterType} from "../utils";
const informationFlying = data.result.flights



const initialState = {
  data : informationFlying,
  typeFilter: sortAndFilterType.SORT_PRICE_UP,
  valueMin: 0,
  valueMax: 100000
}



const ActionType = {
  VALUE_MIN: `VALUE_MIN`,
  VALUE_MAX: `VALUE_MAX`,
  TYPE: `TYPE`,

};

const ActionCreator = {
  getValueMin: (value) => ({
    type: ActionType.VALUE_MIN,
    payload: value
  }),
  getValueMax: (value) => ({
    type: ActionType.VALUE_MAX,
    payload: value
  }),
  getType: (type) => ({
    type: ActionType.TYPE,
    payload: type
  }),

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.VALUE_MIN:
      return {...state, valueMin: action.payload}
    case ActionType.VALUE_MAX:
     return {...state, valueMax: action.payload}
    case ActionType.TYPE:
      return {...state, typeFilter: action.payload}
  }
  return state;
};


export {reducer, ActionCreator, ActionType};
