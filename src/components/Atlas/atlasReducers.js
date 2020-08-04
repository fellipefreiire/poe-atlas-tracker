const INITIAL_STATE = {
	awakenedCounter: 0,
	normalActive: true,
	awakenedActive: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "NORMAL_ACTIVE":
			return {
				...state,
				normalActive: true,
				awakenedActive: false,
			};
		case "AWAKENED_ACTIVE":
			return {
				...state,
				normalActive: false,
				awakenedActive: true,
			};
		case "AWAKE_LEVEL1":
			return {
				...state,
				awakenedCounter: 1,
			};
		case "AWAKE_LEVEL2":
			return {
				...state,
				awakenedCounter: 2,
			};
		default:
			return state;
	}
};
