import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configStore";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({}, sagaMiddleware);
sagaMiddleware.run(rootSaga);
render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("app")
);
serviceWorker.unregister();
