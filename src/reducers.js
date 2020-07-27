import { combineReducers } from "redux";
import mapReducer from "./components/Map/mapReducers";
import CrimsonSocketReducer from "./components/WSocket/CrimsonSocket/CrimsonSocketReducers"

const rootReducer = combineReducers({
	map: mapReducer,
	csr: CrimsonSocketReducer,
});

export default rootReducer;
