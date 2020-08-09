import { combineReducers } from "redux";
import mapReducer from "./components/Map/mapReducers";
import regionReducer from "./components/Region/regionReducers";
import atlasReducer from "./components/Atlas/atlasReducers";
import wCrimsonReducer from "./components/Watchstones/WCrimson/wCrimsonReducers";
import wViridianReducer from "./components/Watchstones/WViridian/wViridianReducers";
import wCobaltReducer from "./components/Watchstones/WCobalt/wCobaltReducers";
import wGoldenReducer from "./components/Watchstones/WGolden/wGoldenReducers";

const rootReducer = combineReducers({
	map: mapReducer,
	region: regionReducer,
	atlas: atlasReducer,
	wCrimson: wCrimsonReducer,
	wViridian: wViridianReducer,
	wCobalt: wCobaltReducer,
	wGolden: wGoldenReducer,
});

export default rootReducer;
