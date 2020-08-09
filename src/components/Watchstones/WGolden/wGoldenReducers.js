const INITIAL_STATE = {
	hhGoldenIsDropped: false,
	teGoldenIsDropped: false,
	lpGoldenIsDropped: false,
	leGoldenIsDropped: false,
	nvGoldenIsDropped: false,
	gcGoldenIsDropped: false,
	vrGoldenIsDropped: false,
	laGoldenIsDropped: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "HH_GOLDEN_DROP":
			return {
				...state,
				hhGoldenIsDropped: true,
			};
		case "HH_GOLDEN_UNDROP":
			return {
				...state,
				hhGoldenIsDropped: false,
			};
		case "TE_GOLDEN_DROP":
			return {
				...state,
				teGoldenIsDropped: true,
			};
		case "TE_GOLDEN_UNDROP":
			return {
				...state,
				teGoldenIsDropped: false,
			};
		case "LP_GOLDEN_DROP":
			return {
				...state,
				lpGoldenIsDropped: true,
			};
		case "LP_GOLDEN_UNDROP":
			return {
				...state,
				lpGoldenIsDropped: false,
			};
		case "LE_GOLDEN_DROP":
			return {
				...state,
				leGoldenIsDropped: true,
			};
		case "LE_GOLDEN_UNDROP":
			return {
				...state,
				leGoldenIsDropped: false,
			};
		case "NV_GOLDEN_DROP":
			return {
				...state,
				nvGoldenIsDropped: true,
			};
		case "NV_GOLDEN_UNDROP":
			return {
				...state,
				nvGoldenIsDropped: false,
			};
		case "GC_GOLDEN_DROP":
			return {
				...state,
				gcGoldenIsDropped: true,
			};
		case "GC_GOLDEN_UNDROP":
			return {
				...state,
				gcGoldenIsDropped: false,
			};
		case "VR_GOLDEN_DROP":
			return {
				...state,
				vrGoldenIsDropped: true,
			};
		case "VR_GOLDEN_UNDROP":
			return {
				...state,
				vrGoldenIsDropped: false,
			};
		case "LA_GOLDEN_DROP":
			return {
				...state,
				laGoldenIsDropped: true,
			};
		case "LA_GOLDEN_UNDROP":
			return {
				...state,
				laGoldenIsDropped: false,
			};
		default:
			return state;
	}
};
