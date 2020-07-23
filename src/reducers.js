import { combineReducers } from "redux";
import mapReducer from "./components/Atlas/Regions/Region/Map/mapReducers";
// import haewarkReducer from "./components/region/haewark-hamlet/haewarkReducer";

const rootReducer = combineReducers({
	map: mapReducer,
	// haewark: haewarkReducer,
});

export default rootReducer;
