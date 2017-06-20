import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import "./index.css";
import "./styles/styles.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById("root")
);
registerServiceWorker();
