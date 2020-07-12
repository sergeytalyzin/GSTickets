import {createSelector} from "reselect";
import {filter} from "../utils";


export const getData = (state) => {
  return state.data;
};


export const getTypeFilter = (state) => {
  return state.typeFilter;
};
export const getValueMin = (state) => {
  return state.valueMin;
};
export const getValueMax = (state) => {
  return state.valueMax;
};


export const getDataToRender = createSelector(
    getData,
    getValueMin,
    getValueMax,
    getTypeFilter,
    (data, valueMin, valueMax, filterTpe) => {
      const myList = data.slice().filter((it) => {

        return +it.flight.price.total.amount > Number(valueMin) && +it.flight.price.total.amount < Number(valueMax);
      });
      return filter(myList, filterTpe);
    });
