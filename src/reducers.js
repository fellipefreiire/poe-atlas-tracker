import { combineReducers } from "redux";
import mapReducer from "./components/Map/mapReducers";
// import haewarkReducer from "./components/region/haewark-hamlet/haewarkReducer";
import watchstoneReducers from "./components/Watchstone/watchstoneReducers";

const rootReducer = combineReducers({
	map: mapReducer,
	// haewark: haewarkReducer,
	watchstone: watchstoneReducers,
});

export default rootReducer;
