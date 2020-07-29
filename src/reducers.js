import { combineReducers } from "redux";
import mapReducer from "./components/Map/mapReducers";
import CrimsonSocketReducer from "./components/WSocket/CrimsonSocket/CrimsonSocketReducers";
import regionReducer from "./components/Region/regionReducers";

const rootReducer = combineReducers({
	map: mapReducer,
	csr: CrimsonSocketReducer,
	region: regionReducer,
});

export default rootReducer;
