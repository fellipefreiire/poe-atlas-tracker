const INITIAL_STATE = {
	maps: [],
	mapCounter: 0,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "MAP_COMPLETED":
			return { ...state, maps: [...state.maps, action.payload], mapCounter: state.mapCounter + 1 };
		case "MAP_UNCOMPLETED":
			return { maps: state.maps.filter(item => item !== action.payload), mapCounter: state.mapCounter - 1 };
		default:
			return state;
	}
};
