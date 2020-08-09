const INITIAL_STATE = {
	hhCrimsonIsDropped: false,
	teCrimsonIsDropped: false,
	lpCrimsonIsDropped: false,
	leCrimsonIsDropped: false,
	nvCrimsonIsDropped: false,
	gcCrimsonIsDropped: false,
	vrCrimsonIsDropped: false,
	laCrimsonIsDropped: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "HH_CRIMSON_DROP":
			return {
				...state,
				hhCrimsonIsDropped: true,
			};
		case "HH_CRIMSON_UNDROP":
			return {
				...state,
				hhCrimsonIsDropped: false,
			};
		case "TE_CRIMSON_DROP":
			return {
				...state,
				teCrimsonIsDropped: true,
			};
		case "TE_CRIMSON_UNDROP":
			return {
				...state,
				teCrimsonIsDropped: false,
			};
		case "LP_CRIMSON_DROP":
			return {
				...state,
				lpCrimsonIsDropped: true,
			};
		case "LP_CRIMSON_UNDROP":
			return {
				...state,
				lpCrimsonIsDropped: false,
			};
		case "LE_CRIMSON_DROP":
			return {
				...state,
				leCrimsonIsDropped: true,
			};
		case "LE_CRIMSON_UNDROP":
			return {
				...state,
				leCrimsonIsDropped: false,
			};
		case "NV_CRIMSON_DROP":
			return {
				...state,
				nvCrimsonIsDropped: true,
			};
		case "NV_CRIMSON_UNDROP":
			return {
				...state,
				nvCrimsonIsDropped: false,
			};
		case "GC_CRIMSON_DROP":
			return {
				...state,
				gcCrimsonIsDropped: true,
			};
		case "GC_CRIMSON_UNDROP":
			return {
				...state,
				gcCrimsonIsDropped: false,
			};
		case "VR_CRIMSON_DROP":
			return {
				...state,
				vrCrimsonIsDropped: true,
			};
		case "VR_CRIMSON_UNDROP":
			return {
				...state,
				vrCrimsonIsDropped: false,
			};
		case "LA_CRIMSON_DROP":
			return {
				...state,
				laCrimsonIsDropped: true,
			};
		case "LA_CRIMSON_UNDROP":
			return {
				...state,
				laCrimsonIsDropped: false,
			};
		default:
			return state;
	}
};
