import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import _ from "lodash";

import App from "./App";
import reducers from "./reducers";

// import { loadState, saveState } from "./localStorage";

import "./styles/global.scss";

// const persistedState = loadState();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, devTools);

// store.subscribe(
// 	_.throttle(() => {
// 		saveState(store.getState());
// 	}, 1000),
// );

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
);
