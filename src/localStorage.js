export const loadState = () => {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			return undefined;
		}

		return JSON.parse(serializedState);
	} catch (err) {
		console.warn("error loading from local storage", err);
		return undefined;
	}
};

export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("state", serializedState);
	} catch (err) {
		console.error("error saving to local storage", err);
	}
};
