export const mapCompleted = id => ({
	type: "MAP_COMPLETED",
	payload: id,
});

export const mapUncompleted = id => ({
	type: "MAP_UNCOMPLETED",
	payload: id,
});

export const awakenedMapCompleted = id => ({
	type: "AWAKENED_MAP_COMPLETED",
	payload: id,
});

export const awakenedMapUncompleted = id => ({
	type: "AWAKENED_MAP_UNCOMPLETED",
	payload: id,
});
