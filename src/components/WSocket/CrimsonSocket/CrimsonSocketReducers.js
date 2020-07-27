const INITIAL_STATE = {
	hasDropped: true
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "DROPPED":
			return { ...state, hasDropped: true }
		default:
			return state;
	}
};

// case "MAP_COMPLETED":
// 			return { ...state, maps: [...state.maps, action.payload], mapCounter: state.mapCounter + 1 };