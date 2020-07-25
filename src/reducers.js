import { combineReducers } from "redux";
import mapReducer from "./components/Map/mapReducers";

const rootReducer = combineReducers({
	map: mapReducer,
});

export default rootReducer;
