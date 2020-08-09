const INITIAL_STATE = {
	hhCobaltIsDropped: false,
	teCobaltIsDropped: false,
	lpCobaltIsDropped: false,
	leCobaltIsDropped: false,
	nvCobaltIsDropped: false,
	gcCobaltIsDropped: false,
	vrCobaltIsDropped: false,
	laCobaltIsDropped: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "HH_COBALT_DROP":
			return {
				...state,
				hhCobaltIsDropped: true,
			};
		case "HH_COBALT_UNDROP":
			return {
				...state,
				hhCobaltIsDropped: false,
			};
		case "TE_COBALT_DROP":
			return {
				...state,
				teCobaltIsDropped: true,
			};
		case "TE_COBALT_UNDROP":
			return {
				...state,
				teCobaltIsDropped: false,
			};
		case "LP_COBALT_DROP":
			return {
				...state,
				lpCobaltIsDropped: true,
			};
		case "LP_COBALT_UNDROP":
			return {
				...state,
				lpCobaltIsDropped: false,
			};
		case "LE_COBALT_DROP":
			return {
				...state,
				leCobaltIsDropped: true,
			};
		case "LE_COBALT_UNDROP":
			return {
				...state,
				leCobaltIsDropped: false,
			};
		case "NV_COBALT_DROP":
			return {
				...state,
				nvCobaltIsDropped: true,
			};
		case "NV_COBALT_UNDROP":
			return {
				...state,
				nvCobaltIsDropped: false,
			};
		case "GC_COBALT_DROP":
			return {
				...state,
				gcCobaltIsDropped: true,
			};
		case "GC_COBALT_UNDROP":
			return {
				...state,
				gcCobaltIsDropped: false,
			};
		case "VR_COBALT_DROP":
			return {
				...state,
				vrCobaltIsDropped: true,
			};
		case "VR_COBALT_UNDROP":
			return {
				...state,
				vrCobaltIsDropped: false,
			};
		case "LA_COBALT_DROP":
			return {
				...state,
				laCobaltIsDropped: true,
			};
		case "LA_COBALT_UNDROP":
			return {
				...state,
				laCobaltIsDropped: false,
			};
		default:
			return state;
	}
};
