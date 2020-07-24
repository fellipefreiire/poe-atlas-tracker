const INITIAL_STATE = {
	watchid: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "DROP":
			return { ...state, watchid: action.payload };
		default:
			return state;
	}
};
