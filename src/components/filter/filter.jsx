import React, {PureComponent, createRef} from "react";
import "./filter.less";
import {sortAndFilterType} from "../../utils";
import {ActionCreator} from "../../reducer/reducer";
import {connect} from "react-redux";


class Filter extends PureComponent {
  constructor(props) {
    super(props);
    this.priceMinRef = createRef();
    this.priceMaxRef = createRef();
  }


  render() {
    const {valueMin, valueMax, type} = this.props;

    return (
      <div className="filter">
        <h2>Сортировка</h2>
        <div className="filter__by-price">
          <input id="filter-radio1" type="radio" name="radio" className="visually-hidden" />
          <label onClick={()=>{
            type(sortAndFilterType.SORT_PRICE_UP);
          }} htmlFor="filter-radio1" className="filter__price-lb"> - по возрастранию цену</label>

          <input id="filter-radio2" type="radio" name="radio" className="visually-hidden" />
          <label onClick={()=>{
            type(sortAndFilterType.SORT_PRICE_DOWN);
          }} htmlFor="filter-radio2" className="filter__price-lb"> - по убыванию цене</label>

          <input id="filter-radio3" type="radio" name="radio" className="visually-hidden" />
          <label onClick={()=>{
            type(sortAndFilterType.SORT_BY_TIME_DURATION);
          }} htmlFor="filter-radio3" className="filter__price-lb"> - по времени в пути</label>
        </div>
        <h2>Фильтровать</h2>
        <input onChange={(e)=>{
          if (e.target.checked) {
            type(sortAndFilterType.FILTER_NO_TRANSFER);
          } else {
            type();
          }

        }} id="filter-checkbox" type="checkbox" name="checkbox" />
        <label htmlFor="filter-checkbox" className="filter__checkbox"> - без пересадок </label>
        <h2>Цена</h2>
        <p>
          <label htmlFor="price-min" className="filter__price-min-lb"/>
          От
          <input ref={this.priceMinRef} onChange={(evt) => {
            evt.persist();
            valueMin(this.priceMinRef.current.value);
          }}
          type="number" id="price-min" name="number" className="filter__price-min" placeholder="0"/>
          <label htmlFor="select" />
        </p>
        <p>
          <label htmlFor="price-max" className="filter__price-max-lb"/>
          До
          <input ref={this.priceMaxRef} onChange={(evt) => {
            evt.persist();
            valueMax(this.priceMinRef.current.value, this.priceMaxRef.current.value);
          }}
          type="number" id="price-max" name="number-two" className="filter__price-max" placeholder="100000"/>
          <label htmlFor="select" />
        </p>


      </div>

    );
  }


}


const mapStateToDispatch = (dispatch) =>({
  valueMin(val) {
    dispatch(ActionCreator.getValueMin(val));
  },
  valueMax: (val) => {
    dispatch(ActionCreator.getValueMax(val));
  },
  type: (typeFilter) => {
    dispatch(ActionCreator.getType(typeFilter));
  }

});

export {Filter};

export default connect(null, mapStateToDispatch)(Filter);
