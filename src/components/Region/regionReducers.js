const INITIAL_STATE = {
	hhWatchstoneCount: 0,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "HH_ADD":
			return { ...state, hhWatchstoneCount: state.hhWatchstoneCount + 1 };
		case "HH_SUB":
			return { ...state, hhWatchstoneCount: state.hhWatchstoneCount - 1 };
		default:
			return state;
	}
};
