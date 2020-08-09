const INITIAL_STATE = {
	hhViridianIsDropped: false,
	teViridianIsDropped: false,
	lpViridianIsDropped: false,
	leViridianIsDropped: false,
	nvViridianIsDropped: false,
	gcViridianIsDropped: false,
	vrViridianIsDropped: false,
	laViridianIsDropped: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "HH_VIRIDIAN_DROP":
			return {
				...state,
				hhViridianIsDropped: true,
			};
		case "HH_VIRIDIAN_UNDROP":
			return {
				...state,
				hhViridianIsDropped: false,
			};
		case "TE_VIRIDIAN_DROP":
			return {
				...state,
				teViridianIsDropped: true,
			};
		case "TE_VIRIDIAN_UNDROP":
			return {
				...state,
				teViridianIsDropped: false,
			};
		case "LP_VIRIDIAN_DROP":
			return {
				...state,
				lpViridianIsDropped: true,
			};
		case "LP_VIRIDIAN_UNDROP":
			return {
				...state,
				lpViridianIsDropped: false,
			};
		case "LE_VIRIDIAN_DROP":
			return {
				...state,
				leViridianIsDropped: true,
			};
		case "LE_VIRIDIAN_UNDROP":
			return {
				...state,
				leViridianIsDropped: false,
			};
		case "NV_VIRIDIAN_DROP":
			return {
				...state,
				nvViridianIsDropped: true,
			};
		case "NV_VIRIDIAN_UNDROP":
			return {
				...state,
				nvViridianIsDropped: false,
			};
		case "GC_VIRIDIAN_DROP":
			return {
				...state,
				gcViridianIsDropped: true,
			};
		case "GC_VIRIDIAN_UNDROP":
			return {
				...state,
				gcViridianIsDropped: false,
			};
		case "VR_VIRIDIAN_DROP":
			return {
				...state,
				vrViridianIsDropped: true,
			};
		case "VR_VIRIDIAN_UNDROP":
			return {
				...state,
				vrViridianIsDropped: false,
			};
		case "LA_VIRIDIAN_DROP":
			return {
				...state,
				laViridianIsDropped: true,
			};
		case "LA_VIRIDIAN_UNDROP":
			return {
				...state,
				laViridianIsDropped: false,
			};
		default:
			return state;
	}
};
