import { combineReducers } from "redux";
import mapReducer from "./components/Map/mapReducers";
import CrimsonSocketReducer from "./components/WSocket/CrimsonSocket/CrimsonSocketReducers";
import regionReducer from "./components/Region/regionReducers";
import atlasReducer from "./components/Atlas/atlasReducers";

const rootReducer = combineReducers({
	map: mapReducer,
	csr: CrimsonSocketReducer,
	region: regionReducer,
	atlas: atlasReducer,
});

export default rootReducer;
