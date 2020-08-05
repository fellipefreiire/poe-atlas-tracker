const INITIAL_STATE = {
	awakenedCounter: 0,
	awakenedFakeCounter: 0,
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
				awakenedCounter: state.awakenedFakeCounter,
			};
		case "AWAKENED_ACTIVE":
			return {
				...state,
				normalActive: false,
				awakenedActive: true,
				awakenedCounter: (state.awakenedCounter = 8),
			};
		case "AWAKE_LEVEL0":
			return {
				...state,
				awakenedCounter: (state.awakenedFakeCounter = 0),
				awakenedFakeCounter: (state.awakenedFakeCounter = 0),
			};
		case "AWAKE_LEVEL1":
			return {
				...state,
				awakenedCounter: (state.awakenedFakeCounter = 1),
				awakenedFakeCounter: (state.awakenedFakeCounter = 1),
			};
		case "AWAKE_LEVEL2":
			return {
				...state,
				awakenedCounter: (state.awakenedFakeCounter = 2),
				awakenedFakeCounter: (state.awakenedFakeCounter = 2),
			};
		case "AWAKE_LEVEL3":
			return {
				...state,
				awakenedCounter: (state.awakenedFakeCounter = 3),
				awakenedFakeCounter: (state.awakenedFakeCounter = 3),
			};
		case "AWAKE_LEVEL4":
			return {
				...state,
				awakenedCounter: (state.awakenedFakeCounter = 4),
				awakenedFakeCounter: (state.awakenedFakeCounter = 4),
			};
		case "AWAKE_LEVEL5":
			return {
				...state,
				awakenedCounter: (state.awakenedFakeCounter = 5),
				awakenedFakeCounter: (state.awakenedFakeCounter = 5),
			};
		case "AWAKE_LEVEL6":
			return {
				...state,
				awakenedCounter: (state.awakenedFakeCounter = 6),
				awakenedFakeCounter: (state.awakenedFakeCounter = 6),
			};
		case "AWAKE_LEVEL7":
			return {
				...state,
				awakenedCounter: (state.awakenedCounter = 7),
				awakenedFakeCounter: (state.awakenedFakeCounter = 7),
			};
		case "AWAKE_LEVEL8":
			return {
				...state,
				awakenedCounter: (state.awakenedFakeCounter = 8),
				awakenedFakeCounter: (state.awakenedFakeCounter = 8),
			};
		default:
			return state;
	}
};
