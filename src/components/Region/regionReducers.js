const INITIAL_STATE = {
	hhWatchstoneCount: 0,
	teWatchstoneCount: 0,
	lpWatchstoneCount: 0,
	leWatchstoneCount: 0,
	nvWatchstoneCount: 0,
	gcWatchstoneCount: 0,
	vrWatchstoneCount: 0,
	laWatchstoneCount: 0,
	count: 0,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "HH_ADD":
			return {
				...state,
				hhWatchstoneCount: state.hhWatchstoneCount + 1,
				count: state.count + 1,
			};
		case "HH_SUB":
			return {
				...state,
				hhWatchstoneCount: state.hhWatchstoneCount - 4,
				count: state.count - 4,
			};
		case "TE_ADD":
			return {
				...state,
				teWatchstoneCount: state.teWatchstoneCount + 1,
				count: state.count + 1,
			};
		case "TE_SUB":
			return {
				...state,
				teWatchstoneCount: state.teWatchstoneCount - 4,
				count: state.count - 4,
			};
		case "LP_ADD":
			return { ...state, lpWatchstoneCount: state.lpWatchstoneCount + 1, count: state.count + 1 };
		case "LP_SUB":
			return { ...state, lpWatchstoneCount: state.lpWatchstoneCount - 4, count: state.count - 4 };
		case "LE_ADD":
			return { ...state, leWatchstoneCount: state.leWatchstoneCount + 1, count: state.count + 1 };
		case "LE_SUB":
			return { ...state, leWatchstoneCount: state.leWatchstoneCount - 4, count: state.count - 4 };
		case "NV_ADD":
			return { ...state, nvWatchstoneCount: state.nvWatchstoneCount + 1, count: state.count + 1 };
		case "NV_SUB":
			return { ...state, nvWatchstoneCount: state.nvWatchstoneCount - 4, count: state.count - 4 };
		case "GC_ADD":
			return { ...state, gcWatchstoneCount: state.gcWatchstoneCount + 1, count: state.count + 1 };
		case "GC_SUB":
			return { ...state, gcWatchstoneCount: state.gcWatchstoneCount - 4, count: state.count - 4 };
		case "VR_ADD":
			return { ...state, vrWatchstoneCount: state.vrWatchstoneCount + 1, count: state.count + 1 };
		case "VR_SUB":
			return { ...state, vrWatchstoneCount: state.vrWatchstoneCount - 4, count: state.count - 4 };
		case "LA_ADD":
			return { ...state, laWatchstoneCount: state.laWatchstoneCount + 1, count: state.count + 1 };
		case "LA_SUB":
			return { ...state, laWatchstoneCount: state.laWatchstoneCount - 4, count: state.count - 4 };
		default:
			return state;
	}
};
