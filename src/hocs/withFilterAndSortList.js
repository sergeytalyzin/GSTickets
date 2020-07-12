import React, {PureComponent} from "react";
import {sortAndFilterType} from "../utils";
import {filter} from "../utils";


const withFilterAndSortList = (Component) => {
  class WithFilterAndSortList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        originData: this.props.data,
        sortedData: this.props.data,
        type: sortAndFilterType.SORT_PRICE_UP,
      };
      this.handleClickFilterType = this.handleClickFilterType.bind(this);
      this.handleClickInput = this.handleClickInput.bind(this);
    }

    handleClickFilterType(filterType) {
      this.setState({
        type: filterType
      });
    }

    handleClickInput(valueMin = 0, valueMax = 100000) {
      const myList = this.state.originData.slice().filter((it) => {

        return +it.flight.price.total.amount > Number(valueMin) && +it.flight.price.total.amount < Number(valueMax);
      });

      this.setState({sortedData: myList});
    }

    render() {
      const data = filter(this.state.sortedData, this.state.type);
      return <Component
        {...this.props}
        data={data}
        handleClickInput = {this.handleClickInput}
        handleClickFilterType={this.handleClickFilterType}
      />;
    }
  }

  return WithFilterAndSortList;
};

export default withFilterAndSortList;
