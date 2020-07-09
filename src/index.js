import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import {data} from "./mocks/mocks"
import withFilterAndSortList from "./hocs/withFilterAndSortList";
const informationFlying = data.result.flights
const AppWrapper = withFilterAndSortList(App)
ReactDom.render(
    <AppWrapper data={informationFlying}/>,
    document.querySelector(`#root`)
);
