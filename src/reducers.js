import { combineReducers } from "redux";
import mapReducer from "./components/Map/mapReducers";
import regionReducer from "./components/Region/regionReducers";
import atlasReducer from "./components/Atlas/atlasReducers";
import wCrimsonReducer from "./components/Watchstones/WCrimson/wCrimsonReducers";
import wViridianReducer from "./components/Watchstones/WViridian/wViridianReducers";

const rootReducer = combineReducers({
	map: mapReducer,
	region: regionReducer,
	atlas: atlasReducer,
	wCrimson: wCrimsonReducer,
	wViridian: wViridianReducer,
});

export default rootReducer;
