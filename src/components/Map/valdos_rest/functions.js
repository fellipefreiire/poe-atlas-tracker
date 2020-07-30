import { valdosList0, valdosList1, valdosList2, valdosList3, valdosList4 } from "./api";

export const valdosRender = count => {
	if (count === 0) {
		return valdosList0();
	} else if (count === 1) {
		return valdosList1();
	} else if (count === 2) {
		return valdosList2();
	} else if (count === 3) {
		return valdosList3();
	} else if (count === 4) {
		return valdosList4();
	}
};
