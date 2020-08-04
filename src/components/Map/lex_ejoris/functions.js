import { ejorisList0, ejorisList1, ejorisList2, ejorisList3, ejorisList4 } from "./api";
import { awakenedEjorisList } from "./awakenedApi";

export const ejorisRender = count => {
	if (count === 0) {
		return ejorisList0();
	} else if (count === 1) {
		return ejorisList1();
	} else if (count === 2) {
		return ejorisList2();
	} else if (count === 3) {
		return ejorisList3();
	} else if (count === 4) {
		return ejorisList4();
	}
};

export const awakenedEjorisRender = () => {
	return awakenedEjorisList();
};
