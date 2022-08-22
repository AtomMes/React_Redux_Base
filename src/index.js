import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";

import { spamFilter } from "./redux/middleware";

const store = createStore(//store enq stexcel, 
  rootReducer,
  compose(
    applyMiddleware(thunk, spamFilter),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>{/* bolor komponentnerin api i meji poxancelenq store-n */}
    <App />,
  </Provider>,  
  document.getElementById("root")
);
