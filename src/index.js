import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {reducer} from "./reducer/reducer";


const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
));

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
