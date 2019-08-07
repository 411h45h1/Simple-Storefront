import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
{
  /* 
import cartReducer from "./components/reducers/cartReducer";
import { createStore } from "redux";

const store = createStore(cartReducer);
*/
}
ReactDOM.render(
  //<Provider
  // store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);
