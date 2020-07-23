export const mapCompleted = id => ({
	type: "MAP_COMPLETED",
	payload: id,
});

export const mapUncompleted = id => ({
	type: "MAP_UNCOMPLETED",
	payload: id,
});
